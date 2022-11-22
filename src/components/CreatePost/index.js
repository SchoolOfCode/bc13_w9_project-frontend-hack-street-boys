import React from "react";
import { useState } from "react";

export default function CreatePost({ handleClick }) {
  const [topic, setTopic] = useState("");
  const [week, setWeek] = useState("");
  const [post, setPost] = useState("");

  function handleNewPost() {
    handleClick(topic, week, post);
  }
  return (
    <div>
      <label>
        Week
        <input
          onChange={(e) => {
            setWeek(e.target.value);
          }}
          type="text"
          placeholder="Week"
        ></input>
      </label>
      <label>
        Topic
        <input
          onChange={(e) => {
            setTopic(e.target.value);
          }}
          type="text"
          placeholder="Topic"
        ></input>
      </label>
      <label>
        Post
        <input
          onChange={(e) => {
            setPost(e.target.value);
          }}
          type="text"
          placeholder="Post here.."
        ></input>
      </label>
      <button onClick={handleNewPost}>Create Post</button>
    </div>
  );
}
