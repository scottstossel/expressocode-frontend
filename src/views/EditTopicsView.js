import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { deleteTopicFromApi, getTopicsFromApi } from "../services/topicService";

const EditTopicsView = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics();
  }, []);

  const getTopics = async () => {
    const response = await getTopicsFromApi();
    setTopics(response.data);
  };

  const handleDelete = async (event, id) => {
    event.preventDefault();
    await deleteTopicFromApi(id);
    let filtered = topics.filter((topic) => {
      return topic._id !== id;
    });
    setTopics(filtered);
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <Table>
        <thead>
          <tr>
            <th>Topic Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {topics &&
            topics.map((topic) => (
              <tr key={topic._id}>
                <td>{topic.name}</td>
                <td>
                  <button
                    onClick={(event) => handleDelete(event, topic._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EditTopicsView;
