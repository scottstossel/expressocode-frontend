import { Card, Button } from "react-bootstrap";
import background from '../images/cup-of-coffee-g7db3be80d_1920.jpg';

const FeaturedCard = () => {
  return (
    <Card style={{ width: "70%", height: "300px", backgroundImage: `url(${background})`, backgroundSize: "cover", display: 'flex' }}>
      <Card.Body>
        <Card.Title style={{color: "white", fontSize: "30px"}}>Featured Post</Card.Title>
        <Card.Text style={{color: "white", marginTop: '5%'}}>
          Post summary.
        </Card.Text>
        <Button variant="primary">Read post</Button>
      </Card.Body>
    </Card>
  );
};

export default FeaturedCard;