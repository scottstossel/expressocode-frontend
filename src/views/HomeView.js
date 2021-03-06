import "./HomeView.css";
import FeaturedCard from "../components/FeaturedCard";
import PostCard from "../components/PostCard";
import { Row, Col, Container } from "react-bootstrap";
import { getPostsFromApi } from "../services/postServices";
import { useEffect, useState } from "react";

const HomeView = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await getPostsFromApi();
    setPosts(response.data);
  }

  return (
    <div className="home-view">
      <div className="home">
        <div className="heading">
          <h1>Welcome to Expresso Code</h1>
          <p id="home-p">
            Your digital hangout for anything programming related.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
