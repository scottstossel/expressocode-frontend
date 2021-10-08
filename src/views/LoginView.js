import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { loginUserToApi } from "../services/authService";

const LoginView = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userResponse = await loginUserToApi(user);
    setUser({
      email: "",
      password: "",
    });
    window.location.reload();
    history.push("/");
  };

  return (
    <div className="container" style={{marginTop: '100px', display: 'flex', justifyContent: 'center'}}>
      <Card className="text-center" style={{width: '500px', backgroundColor: "#474853", color: 'lightgrey'}}>
        <Card.Header>Login Here</Card.Header>
        <Card.Body>
          <form>
          <div>
            <input 
            type="email"
            name="email" 
            placeholder="email"
            value={user.email}
            onChange={handleChange}
            />
          </div>
          <div style={{marginTop: "6px"}}>
            <input 
            type="password"
            name="password" 
            placeholder="password"
            value={user.password}
            onChange={handleChange}
            />
          </div>
          <Button onClick={handleSubmit} style={{marginTop: "6px"}}>Login</Button>
          </form>
        </Card.Body>
        <Card.Footer className="text-muted"><a href="/signup">Create an account</a></Card.Footer>
      </Card>
    </div>
  );
}

export default LoginView;