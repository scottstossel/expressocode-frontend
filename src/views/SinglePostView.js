import { useState, useEffect } from 'react';
import { getSinglePostFromApi } from '../services/postServices';
import './SinglePostView.css';

const SinglePostView = ({match}) => {
  const [post, setPost] = useState([]);
  const id = match.params._id;

  useEffect(() => {
    getSinglePost();
  }, [id])

  const getSinglePost = async () => {
    const response = await getSinglePostFromApi(id);
    setPost(response.data);
    console.log(response.data);
  }
  
  return (
    <div className="SinglePost">
    {post && post.topic && post.user &&
    <>
      <h2 className="post-title">{post.title}</h2>
      <p>Author: {post.user.username}</p>
      <p>{post.topic.name}</p>
      <p>{post.updatedAt}</p>
      <p>{post.content}</p>
      </>
    }
    </div>
  )
}

export default SinglePostView;