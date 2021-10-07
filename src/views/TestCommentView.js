import { useState, useEffect } from "react";
import { postCommentToApi } from "../services/commentService";
import { getSinglePostFromApi } from "../services/postServices";
import { Card, Button } from "react-bootstrap";

const TestCommentView = () => {
  const {user: {uid}} = JSON.parse(localStorage.getItem('jwtexpressocode'));
  // const {_id} = prop;
  const [comment, setComment] = useState({
    content: '',
    user: uid,
    post: ''
  });

  // useEffect(() => {
  //   getSinglePost();
  // }, [pid]);

  // const getSinglePost = async () => {
  //   const response = await getSinglePostFromApi(pid);
  //   setPost(response.data);
  //   console.log(response.data);
  // };

  const handleChange = (event) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    postCommentToApi(comment);
    setComment({
      content: "",
      post: ""
    });
    alert("Submitted comment");
  };

  return (
    <div>
      <Card className="text-center" style={{ width: "700px", marginTop: "100px" }}>
        <Card.Header>Comment</Card.Header>
        <Card.Body>
          <form>
            <div style={{marginTop: '6px'}}>
              <input style={{width: '500px'}}
                type="text"
                name="content"
                placeholder="comment here"
                value={comment.content}
                onChange={handleChange}
              />
              <input style={{width: '500px'}}
                type="text"
                name="post"
                placeholder="post id"
                value={comment.post}
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
  )
}

export default TestCommentView;