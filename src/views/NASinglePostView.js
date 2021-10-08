import { useState, useEffect } from "react";
import { getSinglePostFromApi } from "../services/postServices";
import "./SinglePostView.css";
import { getCommentsFromApi } from "../services/commentService";
import { Card, Button, Row, Col } from "react-bootstrap";

const NASinglePostView = ({ match }) => {
  const [post, setPost] = useState([]);
  const id = match.params._id;
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
              <Card.Body style={{ color: "#AAA0A0" }}>
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
                  <footer className="blockquote-footer">
                    {post.user.username}{" "}
                  </footer>
                </blockquote>
                <p>Likes 👍 : {post.likes}</p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
      {/* create comment */}

      {/* displaying comments of respective post */}
      <div>
        {comments &&
          comments.map((c) => {
            if (c.post._id == post._id) {
              return (
                <div key={c._id}>
                  <Card style={{ marginTop: "10px" }}>
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

export default NASinglePostView;
