import "./index.css";
import Comment from "../Comment";
import AddComment from "../AddComment";
import { useState } from "react";

//POST STRUCTURE
// {id: 2, user_id: 2, post_text: 'Components let you split the UI into independent, …can find a detailed component API reference here.', week_number: 7, topic: 'components'}

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
  userIdPost,
  editPost,
  checkComments,
}) {
  const [canEdit, setCanEdit] = useState(false);
  const [editPostText, setEditPostText] = useState(postText);
  const [editPostWeek, setEditPostWeek] = useState(week);
  const [editPostTopic, setEditPostTopic] = useState(topic);
  const [editButtonText, setEditButtonText] = useState("✏️");
  const [editableClass, setEditableClass] = useState("not-editable");
  
  function handlePostEdit() {
    if (canEdit === true) {
      editPost(id, userIdPost, editPostText, editPostWeek, editPostTopic);
      setCanEdit(!canEdit);
      setEditButtonText("✏️");
      setEditableClass("not-editable")
    } else {
      setCanEdit(!canEdit);
      setEditButtonText("💾");
      setEditableClass("editable")
      //change textcontent to save
    }
  }

  return (
    <div className="post">
      <div>
        <h3>
          Week{" "}
          <span
            contentEditable={canEdit}
            className={editableClass}
            onInput={(e) => setEditPostWeek(e.currentTarget.textContent)}
          >
            {week}
          </span>
        </h3>
        <h3
          contentEditable={canEdit}
          className={editableClass}
          onInput={(e) => setEditPostTopic(e.currentTarget.textContent)}
        >
          {topic}
        </h3>
        <div className="buttons">
          <button onClick={handlePostEdit}>{editButtonText}</button>
          <button
            className="delete-button"
            onClick={() => {
              checkComments(id);
            }}
          >
            ❌
          </button>
        </div>
      </div>
      <p
        className={editableClass}
        contentEditable={canEdit}
        onInput={(e) => setEditPostText(e.currentTarget.textContent)}
      >
        {postText}
      </p>

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
