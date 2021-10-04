import { createContext, useEffect, useState } from "react";
import axios from "axios";
import apiHelper from "../helpers/apiHelper";

export const PostContext = createContext({});

const PostProvider = ({children}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = async () => {
    const response = await apiHelper.get('/post');
    setPosts(response.data);
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts
      }}
      >
        {children}
      </PostContext.Provider>
  )
}

export default PostProvider;