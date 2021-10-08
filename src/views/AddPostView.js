import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { createPost } from "../services/postServices";
import { getTopicsFromApi } from "../services/topicService";

const AddPostView = () => {
  const {user: {uid}} = JSON.parse(localStorage.getItem('jwtexpressocode'));
  const [topics, setTopics] = useState([]);

  const [post, setPost] = useState({
    title: "",
    user: uid,
    content: "",
    img: "",
    topic: "",
    summary: "",
  });

  console.log(uid);

  useEffect(() => {
    getTopics();
  }, []);

  const getTopics = async () => {
    const response = await getTopicsFromApi();
    setTopics(response.data);
  };

  const handleChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    createPost(post);
    setPost({
      title: "",
      content: "",
      img: "",
      topic: "",
      summary: "",
    });
    alert("Submitted post");
  };

  return (
    <div className="container" style={{ marginTop: "100px", display: 'flex', justifyContent: 'center' }}>
      <Card className="text-center" style={{ width: "700px", backgroundColor: "#474853", color: 'lightgrey' }}>
        <Card.Header>Create Post</Card.Header>
        <Card.Body>
          <form>
            <label style={{marginRight: '10px'}}>Topic:</label>
            <select name="topic" onChange={handleChange}>
              <option selected disabled>
                Select a topic
              </option>
              {topics && topics.map((topic) => (
                    <option value={topic._id} key={topic._id}>
                      {topic.name}
                    </option>
                  ))}
            </select>
            <div style={{marginTop: '6px'}}>
              <input style={{width: '500px'}}
                type="text"
                name="title"
                placeholder="post title"
                value={post.title}
                onChange={handleChange}
              />
            </div>
            <div style={{marginTop: '6px'}}>
              <textarea style={{width: '500px', height: '200px'}}
                type="text"
                name="content"
                placeholder="content"
                value={post.content}
                onChange={handleChange}
              />
            </div>
            <Button onClick={handleSubmit} style={{ marginTop: "6px" }}>
              Submit Post
            </Button>
          </form>
        </Card.Body>
      </Card>

    </div>
  );
};

export default AddPostView;
