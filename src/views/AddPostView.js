import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import {EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { postPostToApi } from "../services/postServices";
import { getTopicsFromApi } from "../services/topicService";
import { Editor } from "react-draft-wysiwyg";
import DOMPurify from 'dompurify';
import { convertToHTML } from 'draft-convert';

const AddPostView = () => {
  const {user: {uid}} = JSON.parse(localStorage.getItem('jwtexpressocode'));
  const [topics, setTopics] = useState([]);
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState(null);

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
    postPostToApi(post);
    setPost({
      title: "",
      content: "",
      img: "",
      topic: "",
      summary: "",
    });
    alert("Submitted post");
  };

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
    console.log(convertedContent)
  }

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  return (
    <div className="container" style={{ margin: "80px 10%" }}>
      <Card className="text-center" style={{ width: "700px" }}>
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
              <input style={{width: '500px'}}
                type="text"
                name="summary"
                placeholder="summary"
                value={post.summary}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginTop: "6px", height: '300px' }}>
              <Editor 
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                name="content"
                placeholder="post body"
                value={post.content}
              />
            </div>
            <Button onClick={handleSubmit} style={{ marginTop: "6px" }}>
              Submit Post
            </Button>
          </form>
        </Card.Body>
      </Card>
      <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
    </div>
  );
};

export default AddPostView;
