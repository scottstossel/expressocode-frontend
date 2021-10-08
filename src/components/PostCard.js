import { Card, Button } from "react-bootstrap";

const PostCard = ({post}) => {
  return (
    <Card style={{ backgroundColor: '#474853', display: 'flex', marginTop: '10px' }}>
      <Card.Body style={{color: "lightgrey"}}>
      <span style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
        <Card.Title style={{fontSize: "30px"}}>{post.title}</Card.Title>
        <p>{new Date(post.createdAt).toISOString().split('T')[0]}</p>
      </span>
        <p>{post.content}</p>
        <blockquote className="blockquote mb-0">
                  <footer className="blockquote-footer" style={{color: "lightgrey"}}>
                    {post.user.username}{" "}
                  </footer>
        </blockquote>
        {post && post.likes && <p>Likes   👍  : {post.likes.length}</p>}
        <Button style={{backgroundColor: "#86b3d1", color: "#474853", border: 'none', marginTop: '5px'}} href={`/posts/${post._id}`}>View thread</Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;