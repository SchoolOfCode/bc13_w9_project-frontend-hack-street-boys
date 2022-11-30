import React from "react";
import { useState } from "react";
import './index.css'

/**
 * Renders the input filed and dropdown options for posts
 * @param {function} handleClick
 * @component
 */

export default function CreatePost({ handleClick }) {
  const [topic, setTopic] = useState("");
  const [week, setWeek] = useState("");
  const [post, setPost] = useState("");

  /**
   * calls handleClick which calls createPost function
   * resets the input fields to blank
   */

  function handleNewPost() {
    handleClick(topic, week, post);
    setTopic("");
    setWeek("");
    setPost("");
  }
  return (
    <div className="create-post">
      <div>
        <div className="post-details">
          <select
            value={week}
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
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
            type="text"
            placeholder="Enter Topic..."
          ></input>
        </div>
        <div>
          <button onClick={handleNewPost}>Create Post</button>
        </div>
      </div>
      <textarea
        value={post}
        onChange={(e) => {
          setPost(e.target.value);
        }}
        type="text"
        placeholder="Write a New Post Here..."
      ></textarea>
    </div>
  );
}
