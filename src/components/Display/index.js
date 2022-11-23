import "./index.css";
import Post from "../Post/index.js";
import { useState, useEffect } from "react";

//import comment DATABASE
// const COMMENT = [
//   {
//     id: 4,
//     users_id: 8,
//     post_id: 44,
//     comment_text: "Any extra resources for this?",
//   },
//   { id: 55, user_id: 6, post_id: 5, comment: "This course is Epic!!!" },
// ];
//{id: 1, user_id: 1, post_id: 1, comment: 'that was cool!'}

//FILTER EVERYTHING

function Display({ postDB, deletePost }) {
  const [commentDB, setCommentDB] = useState([]);

  useEffect(() => {
    async function getComments() {
      const response = await fetch(`http://localhost:3001/api/comments`);
      const data = await response.json();
      // console.log("comment data", data.payload);
      setCommentDB(data.payload);
    }
    getComments();
  }, []);
  //Add new Comment
  function handleClick(newComment, postId) {
    const Obj = {
      id: 2,
      user_id: 8,
      post_id: postId,
      comment: newComment,
    };
    setCommentDB([...commentDB, Obj]);
    console.log("commentDB", commentDB);
  }

  async function deleteComment(id) {
    await fetch(`http://localhost:3001/api/comments/${id}`, {
      method: "DELETE",
    });
    const response = await fetch(`http://localhost:3001/api/comments`);
    const data = await response.json();
    setCommentDB(data.payload);
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
            deletePost={deletePost}
          />
        );
      })}
    </div>
  );
}

export default Display;
