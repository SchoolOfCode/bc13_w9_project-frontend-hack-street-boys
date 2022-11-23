import "./index.css";

function Comment({ commentId, comment, deleteComment }) {
  function textShow() {
    console.log("I was clicked");
    return <p>yoooo</p>;
  }

  return (
    <div className="comment">
      <p>{comment}</p>
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
  );
}

export default Comment;
