import { useState } from "react";
import "./index.css";

function AddComment({ handleClick, postId }) {
  const [addComment, setAddComment] = useState("");

  function handleNewComment() {
    handleClick(addComment, postId);
  }

  return (
    <form className="add-comment">
      <label>
        New Comment
        <input
          onChange={(e) => {
            setAddComment(e.target.value);
          }}
          type="text"
          placeholder="New comment.."
        ></input>
      </label>
      <button type='button' onClick={handleNewComment}>New Comment</button>
    </form>
  );
}

export default AddComment;
