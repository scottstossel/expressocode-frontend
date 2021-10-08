import { useState } from "react";
import { useEffect } from "react";
import { getTopicsFromApi } from "../services/topicService";
import { Card } from "react-bootstrap";

const NATopicsView = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics();
  });

  const getTopics = async () => {
    const response = await getTopicsFromApi();
    setTopics(response.data);
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
                        href={`/topicslist/${topic._id}`}
                        style={{ textDecoration: "none", color: "#aaa0a0" }}
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

export default NATopicsView;
