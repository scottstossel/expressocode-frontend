import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { Row, Col } from "react-bootstrap";
import { getPostsFromApi } from "../services/postServices";
import "./AllPostsView.css";

const AllPostsView = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPosts, setFilterPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    const results = posts.filter((post) =>
      post.title.toString().toLowerCase().includes(searchTerm)
    );
    setFilterPosts(results);
  }, [searchTerm]);

  const getPosts = async () => {
    const response = await getPostsFromApi();
    setPosts(response.data);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="all-posts" style={{ marginTop: "80px" }}>
      <label>Search: </label>
      <input
        type="text"
        placeholder="Search posts"
        value={searchTerm}
        onChange={handleChange}
        style={{marginLeft: '10px'}}
      />
      <Row xs={6} md={1} className="g-4">
      {posts &&
          posts.map((post) => {
            if (searchTerm == "") {
              return (
                <div key={post._id}>
                  <Col>
                    <PostCard post={post} />
                  </Col>
                </div>
              );
            }
          })}
        {filterPosts &&
          filterPosts.map((post) => {
            if (searchTerm) {
              return (
                <div key={post._id}>
                  <Col>
                    <PostCard post={post} />
                  </Col>
                </div>
              );
            }
          })}
      </Row>
    </div>
  );
};

export default AllPostsView;
