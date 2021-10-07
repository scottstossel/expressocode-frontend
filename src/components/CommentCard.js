import { Card, Button } from "react-bootstrap";

const CommentCard = ({comment: {content, user, updatedAt, post}}) => {
  return (
    <Card style={{ backgroundColor: 'grey', display: 'flex', marginTop: '20px' }}>
      <Card.Body>
        <p style= {{color: 'white'}}>{updatedAt}</p>
        <Card.Text style={{color: "white", marginTop: '5%'}}>
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostCard;