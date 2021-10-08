import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { signUpUserToApi } from "../services/authService";

const SignUpView = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUpUserToApi(user);
    setUser({
      username: "",
      email: "",
      password: "",
    });
    alert("User has been created");
  };

  return (
    <div className="container" style={{marginTop: "80px", display: 'flex', justifyContent: 'center'}}>
      <Card className="text-center" style={{ width: "500px", backgroundColor: "#474853", color: 'lightgrey' }}>
        <Card.Header>Sign Up Here</Card.Header>
        <Card.Body>
        <p>Want to view/create comments and join the discussion?</p>
        <p>Create an account here.</p>
          <form>
            <div>
              <input
                type="email"
                placeholder="email"
                value={user.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div style={{marginTop: "6px"}}>
              <input
                type="text"
                placeholder="create a username"
                value={user.username}
                onChange={handleChange}
                name="username"
              />
            </div>
            <div style={{marginTop: "6px"}}>
              <input
                type="password"
                placeholder="password"
                value={user.password}
                onChange={handleChange}
                name="password"
              />
            </div>
            <Button onClick={handleSubmit} style={{marginTop: "6px"}}>Create an account</Button>
          </form>
        </Card.Body>
        <Card.Footer className="text-muted" style={{ backgroundColor: 'lightgrey' }}>Already have an account? <a href="/login">Login here.</a></Card.Footer>
      </Card>
    </div>
  );
};

export default SignUpView;
