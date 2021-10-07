import { useEffect, useState } from "react";
import { getPostsFromApi, deletePostFromApi } from "../services/postServices";
import { Table } from "react-bootstrap";

const EditPostsView = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await getPostsFromApi();
    setPosts(response.data);
  };

  const handleDelete = async (event, id) => {
    event.preventDefault();
    await deletePostFromApi(id);
    let filtered = posts.filter((post) => {
      return post._id !== id;
    });
    setPosts(filtered);
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((post) => (
              <tr key={post._id}>
                <td>{post.updatedAt}</td>
                <td>{post.title}</td>
                <td>
                  <button
                    onClick={(event) => handleDelete(event, post._id)}
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

export default EditPostsView;
