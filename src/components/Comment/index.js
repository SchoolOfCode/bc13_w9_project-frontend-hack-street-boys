import "./index.css";
import { useState } from "react";

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
  const [editButtonText, setEditButtonText] = useState('Edit')
  console.log("editCommentText", editCommentText);
  function handleClick() {
    if (canEdit === true) {
      editComment(commentId, userId, postId, editCommentText);
      setCanEdit(!canEdit)
      setEditButtonText('Edit')
    } else {
      setCanEdit(!canEdit);
      setEditButtonText("Save");
      //change textcontent to save
    }
  }

  return (
    <div className="comment">

      <p
        contentEditable={canEdit}
        onInput={(e) => setEditCommentText(e.currentTarget.textContent)}

      >
        {comment}
      </p>
      <div className="comment-buttons">
      <button onClick={handleClick}>{editButtonText}</button>
      {/* {canEdit && (
        <div>
          <input placeholder="Edit your comment"></input>
        </div>
      )} */}
      <button
        onClick={() => {
          deleteComment(commentId);
        }}
      >
        Delete
      </button>
      </div>
    
    </div>
  );
}

export default Comment;
