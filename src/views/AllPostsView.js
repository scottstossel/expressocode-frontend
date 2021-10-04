import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Row, Col } from "react-bootstrap";
import { getPostsFromApi } from "../services/postServices";
import './AllPostsView.css';

const AllPostsView = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await getPostsFromApi();
    setPosts(response.data);
    console.log(response.data);
  }

  return (
    <div className="all-posts">
      <Row xs={4} md={2} className="g-4">
        {posts && posts.map((post) => (
          <div key={post._id}>
            <Col>
              <PostCard post={post} />
            </Col>
          </div>
        ))}
      </Row>
    </div>
  )
}

export default AllPostsView;