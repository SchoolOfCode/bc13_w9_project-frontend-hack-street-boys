import "./index.css";
import Post from "../Post/index.js";
import { useState } from "react";

//import comment DATABASE
const COMMENT = [
  {
    id: 4,
    users_id: 8,
    post_id: 44,
    comment_text: "Any extra resources for this?",
  },
  { id: 55, users_id: 6, post_id: 5, comment_text: "This course is Epic!!!" },
];



//FILTER EVERYTHING

function Display({ postDB }) {
  const [commentDB, setCommentDB] = useState(COMMENT);
console.log(commentDB);
  //Add new Comment
  function handleClick(newComment, postId) {
    const Obj = {
      id: 2,
      users_id: 8,
      post_id: postId,
      comment_text: newComment,
    };
    setCommentDB([...commentDB, Obj]);
    console.log("commentDB", commentDB);
  }

  //Delete Comment
  function deleteComment(id) {
    for (let i = 0; i < commentDB.length; i++){
      if (commentDB[i].id === id) {
        setCommentDB([...commentDB.splice(0, i), ...commentDB.splice(i+1)]);
      }
    }
  }

  return (
    <div className="posts">
      <select>
        <option>Week</option>
        <option>Week 1</option>
        <option>Week 2</option>
        <option>Week 3</option>
      </select>
      <select>
        <option>Topic</option>
        <option>useSate</option>
        <option>useReducer</option>
        <option>useEffect</option>
      </select>
      {postDB.map(function (currentpost) {
        let array = [];
        for (let i = 0; i < commentDB.length; i++) {
          if (commentDB[i].post_id === currentpost.id) {
            array.push(commentDB[i]);
          }
        }
        return (
          <Post
            handleClick={handleClick}
            id={currentpost.id}
            setCommentDB={setCommentDB}
            comments={array}
            topic={currentpost.topic}
            week={currentpost.week}
            postText={currentpost.post_text}
            deleteComment={deleteComment}
          />
        );
      })}
    </div>
  );
}

export default Display;
