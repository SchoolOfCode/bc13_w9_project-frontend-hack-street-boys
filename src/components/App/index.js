import Display from "../Display";
import NavBar from "../NavBar";
import CreatePost from "../CreatePost";
import "./index.css";
import { useEffect, useState } from "react";
import Select from "react-select";
// import AsyncSelect from "react-select/async";

function App() {
  const [postDB, setPostDB] = useState([]);
  const [topicOption, setTopicOption] = useState("");
  const [weekOption, setWeekOption] = useState("");

  //GET ALL POSTS
  useEffect(() => {
    async function getPosts() {
      const arrTopic = [];
      const arrWeek = [];
      const response = await fetch(`http://localhost:3001/api/posts`);
      const data = await response.json();
      console.log("This is data.payload", data.payload);
      setPostDB(data.payload);
      let result = data.payload;

      //Creates new object with label needed for Topic DropDown to work
      result.map((post) => {
        return arrTopic.push({ value: post.topic, label: post.topic });
      });

      //Creates new object with label needed for Week DropDown to work
      arrWeek.push({
        value: "Week",
        label: "Week",
      });
      result.map((post) => {
        return arrWeek.push({
          value: post.week_number,
          label: post.week_number,
        });
      });

      //Removes duplicates from Topic dropdown
      const uniqueTopics = [];
      const unique = arrTopic.filter((element) => {
        const isDuplicate = uniqueTopics.includes(element.label);
        if (!isDuplicate) {
          uniqueTopics.push(element.label);
          return true;
        }
        return false;
      });

      //Removes duplicates from Week dropdown
      const uniqueWeeks = [];
      const uniqueWeek = arrWeek.filter((element) => {
        const isDuplicate = uniqueWeeks.includes(element.label);
        if (!isDuplicate) {
          uniqueWeeks.push(element.label);
          return true;
        }
        return false;
      });

      //Sorts Week Dropdown by size
      setWeekOption(
        uniqueWeek.sort((a, b) => {
          return a.label - b.label;
        })
      );

      //Sorts Topic Dropdown alphabetically
      setTopicOption(
        unique.sort((a, b) => {
          return a.label.toLowerCase() > b.label.toLowerCase()
            ? 1
            : a.label.toLowerCase() < b.label.toLowerCase()
            ? -1
            : 0;
        })
      );
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
    setPostDB(data.payload);
  }

  //Filter out the selected topic dropdown in postDB
  const handleTopic = async (selected) => {
    const response = await fetch(`http://localhost:3001/api/posts`);
    const data = await response.json();
    const payload = data.payload
    const dropDownTopic = payload.filter((obj) => {
      return obj.topic === selected.label;
    });
    setPostDB(dropDownTopic)
    const arrWeek = [];
    dropDownTopic.map((post) => {
      return arrWeek.push({
        value: post.week_number,
        label: post.week_number,
      });
    });
    const uniqueWeeks = [];
    const uniqueWeek = arrWeek.filter((element) => {
      const isDuplicate = uniqueWeeks.includes(element.label);
      if (!isDuplicate) {
        uniqueWeeks.push(element.label);
        return true;
      }
      return false;
    });
    setWeekOption(
      uniqueWeek.sort((a, b) => {
        return a.label - b.label;
      })
    );
  };

  //Filters out the selected week dropdown in postDB
  const handleWeek = async (selected) => {
    const response = await fetch(`http://localhost:3001/api/posts`);
    const data = await response.json();
    const payload = data.payload
    const dropDownWeek = payload.filter((obj) => {
      return obj.week_number === Number(selected.label);
    });
    setPostDB(dropDownWeek);
    const arrTopic = [];
    dropDownWeek.map((post) => {
      return arrTopic.push({ value: post.topic, label: post.topic });
    });
    const uniqueTopics = [];
    const unique = arrTopic.filter((element) => {
      const isDuplicate = uniqueTopics.includes(element.label);
      if (!isDuplicate) {
        uniqueTopics.push(element.label);
        return true;
      }
      return false;
    });
    setTopicOption(
      unique.sort((a, b) => {
        return a.label.toLowerCase() > b.label.toLowerCase()
          ? 1
          : a.label.toLowerCase() < b.label.toLowerCase()
          ? -1
          : 0;
      })
    );
  };

  const handleReset = async () => {
    const response = await fetch(`http://localhost:3001/api/posts`);
    const data = await response.json();
    let result = data.payload;
    setPostDB(result);
  }

  return (
    <div className="app">
      <NavBar />
      <CreatePost handleClick={handleClick} />
      <div className="filters">
      <h3>Filter By:</h3>
        <Select
          options={weekOption}
          placeholder="Week"
          onChange={handleWeek}
        />
        <Select
          options={topicOption}
          placeholder="Topic"
          onChange={handleTopic}
        />
        <button onClick={handleReset}>Reset Filters</button>
      </div>
      <Display editPost={editPost} postDB={postDB} deletePost={deletePost} />
    </div>
  );
}

export default App;
