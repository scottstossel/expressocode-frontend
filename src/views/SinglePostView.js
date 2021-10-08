import { useState, useEffect } from "react";
import { getSinglePostFromApi, likePostToApi } from "../services/postServices";
import "./SinglePostView.css";
import {
  getCommentsFromApi,
  postCommentToApi,
} from "../services/commentService";
import { Card, Button, Row, Col } from "react-bootstrap";

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
    window.location.reload();
  };

  //handle like
  const handleLike = async (event) => {
    event.preventDefault();
    const response = await likePostToApi(id);
    setPost(response);
    alert('Thanks for the like');
    window.location.reload();
  }

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
    {/* display post  */}

      <Row xs={6} md={1} className="g-4">
        <Col>
          {post && post.topic && post.user && (
            <Card
              style={{
                backgroundColor: "#474853",
                display: "flex",
                marginTop: "10px",
              }}
            >
              <Card.Body style={{ color: "lightgrey" }}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                  }}
                >
                  <Card.Title style={{ fontSize: "30px" }}>
                    {post.title}
                  </Card.Title>
                  <p>{new Date(post.createdAt).toISOString().split('T')[0]}</p>
                </span>
                <p>{post.content}</p>
                <blockquote className="blockquote mb-0">
                  <footer className="blockquote-footer" style={{color: "lightgrey"}}>
                    {post.user.username}{" "}
                  </footer>
                </blockquote>
                {post.likes && <p>Likes 👍 : {post.likes.length}</p>}
                <Button
                  style={{
                    backgroundColor: "#86b3d1",
                    color: "#474853",
                    border: "none",
                    marginTop: "5px",
                  }}
                  onClick={handleLike}
                >
                  Like Post 👍
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
      {/* create comment */}

      <div style={{ marginTop: "10px" }}>
        <Card className="text-center" style={{backgroundColor: "#474853", color: 'lightgrey'}} >
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
              <Button onClick={handleSubmit} style={{
                    backgroundColor: "#86b3d1",
                    color: "#474853",
                    border: "none",
                    marginTop: "10px"
                  }}>
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
            if (c.post && c.post._id == id) {
              return (
                <div key={c._id}>
                  <Card style={{marginTop: '10px', backgroundColor: "#474853", color: 'lightgrey'}}>
                    <Card.Header>{new Date(c.createdAt).toISOString().split('T')[0]}</Card.Header>
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <p> {c.content} </p>
                        <footer className="blockquote-footer">
                          {c.user.username} <cite title="Source Title"></cite>
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
