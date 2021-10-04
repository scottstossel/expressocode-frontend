import "./HomeView.css";
import FeaturedCard from "../components/FeaturedCard";
import PostCard from "../components/PostCard";
import { Row, Col, Container } from "react-bootstrap";

const HomeView = () => {
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
      <div className="featured">
        <FeaturedCard />
      </div>
      <Container>
        <Row xs={4} md={2} className="g-4">
          <Col>
            <PostCard />
          </Col>
          <Col>
            <PostCard />
          </Col>
          <Col>
            <PostCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeView;
