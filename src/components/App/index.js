import Display from "../Display";
import NavBar from "../NavBar";
import CreatePost from "../CreatePost";
import "./index.css";
import { useEffect, useState } from "react";
import Filters from "../Filters";

function App() {
  const [postDB, setPostDB] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(`http://localhost:3001/api/posts`);
      const data = await response.json();
      let sortedData = data.payload.sort((a, b) => {
        return b.week_number - a.week_number;
      });
      setPostDB(sortedData);
    }
    getPosts();
  }, []);

  //POST A POST
  async function createPost(newObj) {
    await fetch("http://localhost:3001/api/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      mode: "cors",
      body: JSON.stringify(newObj),
    });
    const response = await fetch(`http://localhost:3001/api/posts`);
    const data = await response.json();
    let sortedData = data.payload.sort((a, b) => {
      return b.week_number - a.week_number;
    });
    setPostDB(sortedData);
  }

  function handleClick(topic, week, post) {
    const newObj = {
      user_id: 1,
      week_number: Number(week),
      topic: topic,
      post_text: post,
    };
    createPost(newObj);
  }

  //DELETE A POST
  async function deletePost(id) {
    await fetch(`http://localhost:3001/api/posts/${id}`, {
      method: "DELETE",
    });
    const response = await fetch(`http://localhost:3001/api/posts`);
    const data = await response.json();
    let sortedData = data.payload.sort((a, b) => {
      return b.week_number - a.week_number;
    });
    setPostDB(sortedData);
  }

  // User press POST delete
  // call the del comment function which is defined in display compontent and passed down to post
  // handleclick which first calls deletecomment function then calls the delete post function for that post_id

  //PACTH A POST
  async function editPost(id, userIdPost, editPostText, week, topic) {
    const newObj = {
      id: id,
      user_id: userIdPost,
      post_text: editPostText,
      week_number: week,
      topic: topic,
    };
    await fetch(`http://localhost:3001/api/posts/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      mode: "cors",
      body: JSON.stringify(newObj),
    });
    const response = await fetch(`http://localhost:3001/api/posts`);
    const data = await response.json();
    let sortedData = data.payload.sort((a, b) => {
      return b.week_number - a.week_number;
    });
    setPostDB(sortedData);
  }

  return (
    <div className="app">
      <NavBar />
      <CreatePost handleClick={handleClick} />
      <Filters postDB={postDB} setPostDB={setPostDB}/>
      <Display editPost={editPost} postDB={postDB} deletePost={deletePost} />
    </div>
  );
}

export default App;
