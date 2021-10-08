import { useState } from "react";
import { useEffect } from "react";
import { getTopicsFromApi, postTopicToApi } from "../services/topicService";
import { Button, Card } from "react-bootstrap";

const TopicsView = () => {
  const [topics, setTopics] = useState([]);
  const {
    user: { uid },
  } = JSON.parse(localStorage.getItem("jwtexpressocode"));
  const [topic, setTopic] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    getTopics();
  });

  const getTopics = async () => {
    const response = await getTopicsFromApi();
    setTopics(response.data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    postTopicToApi(topic);
    setTopic({
      name: "",
      description: "",
    });
    alert("Submitted topic");
  };

  const handleChange = (event) => {
    setTopic({
      ...topic,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "80px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Topics List</h2>
      <Card
        className="text-center"
        style={{ width: "700px", marginTop: "20px", marginBottom: '10px', backgroundColor: "#474853", color: 'lightgrey' }}
      >
        <Card.Header>Create new discussion topic:</Card.Header>
        <Card.Body>
          <form>
            <div style={{ marginTop: "6px" }}>
              <input
                style={{ width: "500px" }}
                type="text"
                name="name"
                placeholder="topic name"
                value={topic.name}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginTop: "6px" }}>
              <input
                style={{ width: "500px" }}
                type="text"
                name="description"
                placeholder="description of topic (optional)"
                value={topic.description}
                onChange={handleChange}
              />
            </div>
            <Button
              onClick={handleSubmit}
              style={{ marginTop: "6px" }}
              variant="primary"
            >
              Submit Topic
            </Button>
          </form>
        </Card.Body>
      </Card>
      <div style={{ marginTop: "20px", marginBottom: "10px" }}>
        {topics &&
          topics.map((topic) => (
            <div key={topic._id}>
              <Card
                style={{
                  marginTop: "10px",
                  backgroundColor: "#474853",
                  color: "#aaa0a0",
                }}
              >
                <Card.Header>
                  <a
                    href={`/topic/${topic._id}`}
                    style={{ color: "#86b3d1", textDecoration: "none" }}
                  >
                    {topic.name}
                  </a>
                </Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      <a
                        href={`/topic/${topic._id}`}
                        style={{ textDecoration: "none", color: "lightgrey" }}
                      >
                        {" "}
                        {topic.description}{" "}
                      </a>
                    </p>
                  </blockquote>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopicsView;
