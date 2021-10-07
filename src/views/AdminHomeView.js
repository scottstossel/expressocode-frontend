import { Card, Button } from "react-bootstrap";

const AdminHomeView = () => {
  return (
    <div className="container" style={{marginTop: '80px'}}>
      <Card className="text-center">
        <Card.Header>Edit Posts</Card.Header>
        <Card.Body>
          <Button variant="primary" href="/editposts">
            Edit Posts
          </Button>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Header>Edit Comments</Card.Header>
        <Card.Body>
          <Button variant="primary" href="/editcomments">
            Edit Comments
          </Button>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Header>Edit Topics</Card.Header>
        <Card.Body>
          <Button variant="primary" href="/edittopics">
            Edit Topics
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminHomeView;