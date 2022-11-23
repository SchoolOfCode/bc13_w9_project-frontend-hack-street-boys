import Display from "../Display";
import NavBar from "../NavBar";
import CreatePost from "../CreatePost";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [postDB, setPostDB] = useState([]);

  //GET ALL POST
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(`http://localhost:3001/api/posts`);
      const data = await response.json();
      console.log(data.payload);
      setPostDB(data.payload);
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
    setPostDB(data.payload);
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
    setPostDB(data.payload);
  }

  return (
    <div className="app">
      <NavBar />
      <CreatePost handleClick={handleClick} />
      <Display postDB={postDB} deletePost={deletePost} />
    </div>
  );
}

export default App;
