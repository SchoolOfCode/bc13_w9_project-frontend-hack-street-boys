import { useState } from "react";
import "./index.css";

function AddComment({ createComment, postId }) {
  const [addComment, setAddComment] = useState("");

  function handleNewComment() {
    createComment(addComment, postId);
  }

  return (
    <form className="add-comment">
        <input
          onChange={(e) => {
            setAddComment(e.target.value);
          }}
          type="text"
          placeholder="New comment.."
        ></input>
      <button type="button" onClick={handleNewComment}>
        New Comment
      </button>
    </form>
  );
}

export default AddComment;
