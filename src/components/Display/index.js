import "./index.css";
import Post from "../Post/index.js";
import { useState } from "react";

//import comment DATABASE
const COMMENT = [
  {
    id: 1,
    users_id: 8,
    post_id: 4,
    comment_text: "Any extra resources for this?",
  },
  { id: 2, users_id: 6, post_id: 5, comment_text: "This course is Epic!!!" },
];

//FILTER EVERYTHING

function Display({ postDB }) {
  const [commentDB, setCommentDB] = useState(COMMENT);

  function handleClick(newComment, postId) {
    const Obj = {
      id: 3,
      users_id: 8,
      post_id: postId,
      comment_text: newComment,
    };
    setCommentDB([...commentDB, Obj]);
    console.log("commentDB", commentDB);
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
          />
        );
      })}
    </div>
  );
}

export default Display;
