import React from "react";
import { useState } from "react";
import './index.css'

export default function CreatePost({ handleClick }) {
  const [topic, setTopic] = useState("");
  const [week, setWeek] = useState("");
  const [post, setPost] = useState("");

  function handleNewPost() {
    handleClick(topic, week, post);
  }
  return (
    <div className="create-post">
      <div>
        <div className="post-details">
          <select
              onChange={(e) => {
                setWeek(e.target.value);
              }}
              placeholder="Week"
          >
            <option>Week</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
          <input
              onChange={(e) => {
                setTopic(e.target.value);
              }}
              type="text"
              placeholder="Enter Topic..."
            >
          </input>
        </div>
        <div>
          <button onClick={handleNewPost}>Create Post</button>
        </div>
      </div>
        <textarea
          onChange={(e) => {
            setPost(e.target.value);
          }}
          type="text"
          placeholder="Write a New Post Here..."
        >
        </textarea>
    </div>
  );
}
