import "./index.css";
import Comment from "../Comment";
import AddComment from "../AddComment";

function Post({
  setCommentDB,
  comments,
  topic,
  postText,
  week,
  id,
  createComment,
  deleteComment,
  deletePost,
  editComment,
}) {
  return (
    <div className="post">
      <div>
        <h3>Week {week}</h3>
        <h3>{topic}</h3>
        <button className="deletebutton"
          onClick={() => {
            deletePost(id);
          }}
        >
          Delete
        </button>
      </div>
      <p className="post-text">{postText}</p>
      <div className="comments">
        {comments.map(function (currentItem) {
          return (
            <Comment
              editComment={editComment}
              userId={currentItem.user_id}
              postId={id}
              comment={currentItem.comment}
              commentId={currentItem.id}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
      <AddComment
        createComment={createComment}
        postId={id}
        setCommentDB={setCommentDB}
      />
    </div>
  );
}

export default Post;
