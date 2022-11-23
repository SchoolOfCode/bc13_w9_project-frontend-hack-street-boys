import "./index.css";
import Post from "../Post/index.js";
import { useState, useEffect } from "react";

//Comment object structure
//{id: 1, user_id: 1, post_id: 1, comment: 'that was cool!'}

//FILTER EVERYTHING

function Display({ postDB, deletePost }) {
  const [commentDB, setCommentDB] = useState([]);

  //GET ALL COMMENTS
  useEffect(() => {
    async function getComments() {
      const response = await fetch(`http://localhost:3001/api/comments`);
      const data = await response.json();
      setCommentDB(data.payload);
    }
    getComments();
  }, []);

  // POST A COMMENT
  async function createComment(addComment, postId) {
    const newObj = {
      user_id: 2,
      post_id: postId,
      comment: addComment,
    };
    await fetch("http://localhost:3001/api/comments", {
      method: "POST",
      headers: { "content-type": "application/json" },
      mode: "cors",
      body: JSON.stringify(newObj),
    });
    const response = await fetch(`http://localhost:3001/api/comments`);
    const data = await response.json();
    setCommentDB(data.payload);
  }

  // DELETE A COMMENT
  async function deleteComment(id) {
    await fetch(`http://localhost:3001/api/comments/${id}`, {
      method: "DELETE",
    });
    const response = await fetch(`http://localhost:3001/api/comments`);
    const data = await response.json();
    setCommentDB(data.payload);
  }

  //PATCH A COMMENT
  async function editComment(commentId, user_id, postId, commentText) {
    const newObj = {
      id: commentId,
      user_id: user_id,
      post_id: postId,
      comment: commentText,
    };
    await fetch(`http://localhost:3001/api/comments/${commentId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      mode: "cors",
      body: JSON.stringify(newObj),
    });
    const response = await fetch(`http://localhost:3001/api/comments`);
    const data = await response.json();
    setCommentDB(data.payload);
  }

  return (
    <div className="display">
      <div className="filters">
        <h3>Filter By:</h3>
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
      </div>
      <div className="posts">
        {postDB.map(function (currentpost) {
          let array = [];
          for (let i = 0; i < commentDB.length; i++) {
            if (commentDB[i].post_id === currentpost.id) {
              array.push(commentDB[i]);
            }
          }
          return (
            <Post
              editComment={editComment}
              createComment={createComment}
              id={currentpost.id}
              setCommentDB={setCommentDB}
              comments={array}
              topic={currentpost.topic}
              week={currentpost.week_number}
              postText={currentpost.post_text}
              deleteComment={deleteComment}
              deletePost={deletePost}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Display;
