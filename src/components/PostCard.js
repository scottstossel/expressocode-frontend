import { Card, Button } from "react-bootstrap";

const PostCard = ({post: {title, content, updatedAt, _id, likes, user}}) => {
  return (
    <Card style={{ backgroundColor: '#474853', display: 'flex', marginTop: '10px' }}>
      <Card.Body style={{color: "#AAA0A0"}}>
      <span style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
        <Card.Title style={{fontSize: "30px"}}>{title}</Card.Title>
        <p>{updatedAt}</p>
      </span>
        <p>{content}</p>
        <blockquote className="blockquote mb-0">
                  <footer className="blockquote-footer">
                    {user.username}{" "}
                  </footer>
        </blockquote>
        <p>Likes   👍  : {likes}</p>
        <Button style={{backgroundColor: "#86b3d1", color: "#474853", border: 'none', marginTop: '5px'}} href={`/posts/${_id}`}>View post</Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;