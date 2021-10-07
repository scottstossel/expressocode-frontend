import { useEffect, useState } from "react";
import { getCommentsFromApi } from "../services/commentService";

const EditCommentsView = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const response = await getCommentsFromApi();
    setComments(response.data);
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <h2>All comments</h2>
      {/* <h4>{JSON.stringify(comments)}</h4> */}
      {comments && comments.map((comment) => (
          <div key={comment._id}>
            <p>---------------------</p>
            <p>Content {comment.content}</p>
            <p>USER {comment.user?.username}</p>
            <p>TItle {comment.post?.title}</p>
            <p>---------------------</p>
          </div>
        ))}
    </div>
  );
};

export default EditCommentsView;