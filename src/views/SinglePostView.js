import { useState, useEffect } from 'react';
import { getSinglePostFromApi } from '../services/postServices';

const SinglePostView = ({match}) => {
  const [post, setPost] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    getSinglePost();
  }, [id])

  const getSinglePost = async () => {
    const response = await getSinglePostFromApi(id);
    setPost(response.data);
  }

  return (
    <div className="container">
      <h2>Post Title</h2>
      <p>Topic</p>
      <p>Post date</p>
      <p>Post content</p>
    </div>
  )
}