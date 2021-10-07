import { useState, useEffect } from "react";
import { getSinglePostFromApi } from "../services/postServices";
import "./SinglePostView.css";
import {
  getCommentsFromApi,
  postCommentToApi,
} from "../services/commentService";
import { Card, Button } from "react-bootstrap";
import {BiLike} from 'react-icons/bi';

const SinglePostView = ({ match }) => {
  const [post, setPost] = useState([]);
  const id = match.params._id;
  const {
    user: { uid },
  } = JSON.parse(localStorage.getItem("jwtexpressocode"));
  //set comments for commenting
  const [comment, setComment] = useState({
    content: "",
    user: uid,
    post: id,
  });
  //comment list
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getSinglePost();
  }, [id]);

  useEffect(() => {
    getComments();
  }, []);

//get post from api
  const getSinglePost = async () => {
    const response = await getSinglePostFromApi(id);
    setPost(response.data);
  };
//handle submit for commenting
  const handleSubmit = async (event) => {
    event.preventDefault();
    postCommentToApi(comment);
    setComment({
      content: "",
    });
    alert("Submitted comment", comment);
  };

  //handle change for commenting
  const handleChange = (event) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
    });
  };

//get comments from api
  const getComments = async () => {
    const response = await getCommentsFromApi();
    // console.log(data);
    setComments(response.data);
  };

  return (
    <div className="SinglePost">
    {/* display post */}
      {post && post.topic && post.user && (
        <>
          <h2 className="post-title">{post.title}</h2>
          <p>Likes: {post.likes}</p>
          <p>Author: {post.user.username}</p>
          <p>{post.topic.name}</p>
          <p>{post.updatedAt}</p>
          <p>{post.content}</p>
        </>
      )}
      {/* like button */}
      <Button>Like Post <BiLike /></Button>

      {/* create comment */}

      <div style={{marginTop: '10px'}}>
        <Card className="text-center">
          <Card.Header>Comment</Card.Header>
          <Card.Body>
            <form>
              <div style={{ marginTop: "6px" }}>
                <input
                  style={{ width: "500px" }}
                  type="text"
                  name="content"
                  placeholder="comment here"
                  value={comment.content}
                  onChange={handleChange}
                />
              </div>
              <Button onClick={handleSubmit} style={{ marginTop: "6px" }}>
                Submit Comment
              </Button>
            </form>
          </Card.Body>
        </Card>
      </div>
      
      {/* displaying comments of respective post */}
      <div>
        {comments &&
          comments.map((c) => {
            if (c.post._id == post._id) {
              return (
                <div key={c._id}>
                  <Card>
                    <Card.Header>{c.updatedAt}</Card.Header>
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <p>
                          {" "}
                          {c.content}{" "}
                        </p>
                        <footer className="blockquote-footer">
                          {c.user.username}{" "}
                          <cite title="Source Title"></cite>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Card>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default SinglePostView;
