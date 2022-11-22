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
  handleClick,
}) {
  return (
    <div className="post">
      <div>
        <p>{topic}</p>
        <p>{week}</p>
      </div>
      <p>{postText}</p>
      <div className="comments">
        {comments.map(function (currentItem) {
          return <Comment comment_text={currentItem.comment_text} />;
        })}
      </div>
      <AddComment
        handleClick={handleClick}
        postId={id}
        setCommentDB={setCommentDB}
      />
    </div>
  );
}

export default Post;
