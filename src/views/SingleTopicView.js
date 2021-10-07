import { useState, useEffect } from "react";
import { getPostsFromApi } from "../services/postServices";
import { getSingleTopicFromApi } from "../services/topicService";
import "./SinglePostView.css";
import PostCard from "../components/PostCard"

const SingleTopicView = ({ match }) => {
  const [topic, setTopic] = useState([]);
  const [posts, setPosts] = useState([]);
  const id = match.params._id;

  useEffect(() => {
    getSingleTopic();
  }, [id]);

  useEffect(() => {
    getPosts();
  }, []);

  const getSingleTopic = async () => {
    const response = await getSingleTopicFromApi(id);
    setTopic(response.data);
  };

  const getPosts = async () => {
    const response = await getPostsFromApi();
    setPosts(response.data);
    console.log(response.data);
  };

  return (
    <div className="SinglePost">
      {topic && (
        <>
          <h2 className="post-title">{topic.name}</h2>
        </>
      )}
      {posts &&
        posts.map((post) => {
          if (post.topic._id == id) {
            return (
              <>
                <PostCard post={post} />
              </>
            );
          }
        })}
    </div>
  );
};

export default SingleTopicView;
