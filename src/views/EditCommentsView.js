import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { deleteCommentFromApi, getCommentsFromApi } from "../services/commentService";

const EditCommentsView = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const response = await getCommentsFromApi();
    setComments(response.data);
  };

  const handleDelete = async (event, id) => {
    event.preventDefault();
    await deleteCommentFromApi(id);
    let filtered = comments.filter((comment) => {
      return comment._id !== id;
    });
    setComments(filtered);
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <Table>
        <thead>
          <tr>
            <th>Comment</th>
            <th>User</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {comments &&
            comments.map((comment) => (
              <tr key={comment._id}>
                <td>{comment.content}</td>
                <td>{comment.user.username}</td>
                <td>
                  <button
                    onClick={(event) => handleDelete(event, comment._id)}
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

export default EditCommentsView;