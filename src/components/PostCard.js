import { Card, Button } from "react-bootstrap";

const PostCard = ({post: {title, summary, updatedAt, _id}}) => {
  return (
    <Card style={{ backgroundColor: 'grey', display: 'flex', marginTop: '20px' }}>
      <Card.Body>
        <Card.Title style={{color: "white", fontSize: "30px"}}>{title}</Card.Title>
        <p style= {{color: 'white'}}>{updatedAt}</p>
        <Card.Text style={{color: "white", marginTop: '5%'}}>
          {summary}
        </Card.Text>
        <Button variant="primary" href={`/posts/${_id}`}>Read post</Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;