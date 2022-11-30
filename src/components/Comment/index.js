import "./index.css";
import { useState } from "react";
/**
 * Displays the comment linked to relevent post
 * @param {function} editComment 
 * @param {function} deleteComment 
 * @param {number} userId 
 * @param {number} postId 
 * @param {number} commentId
 * @param {string} comment
 * @component
 */
function Comment({
  editComment,
  userId,
  postId,
  commentId,
  comment,
  deleteComment,
}) {
  const [canEdit, setCanEdit] = useState(false);
  const [editCommentText, setEditCommentText] = useState(comment);
  const [editButtonText, setEditButtonText] = useState("✏️");
  const [editableClass, setEditableClass] = useState("not-editable");

  /**
   * Function toggles the edit state of the comment field.
   */

  function handleClick() {
    if (canEdit === true) {
      editComment(commentId, userId, postId, editCommentText);
      setCanEdit(!canEdit);
      setEditButtonText("✏️");
      setEditableClass("not-editable");
    } else {
      setCanEdit(!canEdit);
      setEditButtonText("💾");
      setEditableClass("editable");
    }
  }

  return (
    <div className="comment">
      <p
        contentEditable={canEdit}
        className={editableClass}
        onInput={(e) => setEditCommentText(e.currentTarget.textContent)}
      >
        {comment}
      </p>
      <div className="comment-buttons">
        <button onClick={handleClick}>{editButtonText}</button>
        <button
          onClick={() => {
            deleteComment(commentId);
          }}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default Comment;
