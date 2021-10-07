import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from '../services/tools';
import React from 'react';
import { getSinglePostFromApi, updatePostToApi } from '../services/postServices';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;


const ContentEditor = ({match}) => {
  const [content, setContent] = useState({});
  const {id} = match.params;

  useEffect(() => {
    const getSinglePost = async () => {
      const token = localStorage.getItem('jwtexpressocode');

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json"
        }
      }

      try {
        const { data } = await axios.get(`${apiUrl}/post/post/${id}`, config);
        setContent(data);
      } catch {
        console.log(error);
      }
    }
  }, [id])

  const instanceRef = useRef(null);

  async function handleUpdate() {
    const token = localStorage.getItem("jwtexpressocode");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json"
      }
    }
    await instanceRef.current.save().then(val => axios.put(`${apiUrl}/post/post/${id}`, val, config));
  }

  return (
    <div>
      <button onClick={() => handleUpdate()}>Save</button>
      <EditorJs 
      enableReInitialize={true}
      data={content}
      instanceRef={(instance) => (instanceRef.current = instance)}
      tools={EDITOR_JS_TOOLS}
      />
    </div>
  )
}

export default ContentEditor;