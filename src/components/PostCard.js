import { Card, Button } from "react-bootstrap";

const PostCard = ({post: {title, summary, updatedAt, _id}}) => {
  return (
    <Card style={{ backgroundColor: '#474853', display: 'flex', marginTop: '20px' }}>
      <Card.Body style={{color: "white"}}>
        <Card.Title style={{fontSize: "30px"}}>{title}</Card.Title>
        <p>{updatedAt}</p>
        <Card.Text style={{marginTop: '5%'}}>
          {summary}
        </Card.Text>
        <Button style={{backgroundColor: "#86b3d1", color: "#474853", border: 'none'}} href={`/posts/${_id}`}>Read post</Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;