import "./index.css";

function Comment({ commentId, comment, deleteComment }) {
  function textShow() {
    console.log("I was clicked");
  }

  return (
    <div className="comment">
      <p>{comment}</p>
      <div className="comment-buttons">
      <button
        onClick={() => {
          textShow();
        }}
      >
        Edit
      </button>
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
