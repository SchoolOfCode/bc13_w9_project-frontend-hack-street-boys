import { useState } from "react";
import "./index.css";

/**
 * Function takes the user input and the postId to create a comment linked to that post.
 * @param {string}  createComment
 * @param {number} postId
 * @component 
 */

function AddComment({ createComment, postId }) {
  const [addComment, setAddComment] = useState("");

  /**
   * Function is called after user presses submit on commnet
   * Calls function createComment with POSTS the comment to DB
   * resets the input fields to blank
   */
  function handleNewComment() {
    createComment(addComment, postId);
    setAddComment("");
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
