import { useState } from "react";
import "./index.css";

function AddComment({ createComment, postId }) {
  const [addComment, setAddComment] = useState("");

  function handleNewComment() {
    createComment(addComment, postId);
    setAddComment('')
  }

  return (
    <form className="add-comment">
      <input
        value={addComment}
        onChange={(e) => {
          setAddComment(e.target.value);
        }}
        type="text"
        placeholder="Add a New Comment.."
      ></input>
      <button type="button" onClick={handleNewComment}>
        New Comment
      </button>
    </form>
  );
}

export default AddComment;
