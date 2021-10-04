import { useContext } from "react";
import PostCard from "../components/PostCard";
import { PostContext } from "../contexts/PostContext";
import {AuthContext} from "../contexts/AuthContext";
import { Row, Col } from "react-bootstrap";

const AllPostsView = () => {
  const { user } = useContext(AuthContext);
  const { posts } = useContext(PostContext);

  return (
    <div className="container">
      <Row>
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