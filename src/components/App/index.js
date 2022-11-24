import Display from "../Display";
import NavBar from "../NavBar";
import CreatePost from "../CreatePost";
import "./index.css";
import { useEffect, useState } from "react";
// import AsyncSelect from "react-select/async";
import Select from "react-select";

function App() {
  const [postDB, setPostDB] = useState([]);
  const [topicOption, setTopicOption] = useState([""]);
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
  const handleTopic = (selected) => {
    console.log("selected topic", selected.label);
    const dropDownTopic = postDB.filter((obj) => {
      return obj.topic === Number(selected.label);
    });
    console.log("dropDownTopic", dropDownTopic);
  };

  //Filters out the selected week dropdown in postDB
  const handleWeek = (selected) => {
    console.log("selected week", selected.label);
    const dropDownWeek = postDB.filter((obj) => {
      return obj.week_number === Number(selected.label);
    });
    console.log("dropDownWeek", dropDownWeek);
  };

  return (
    <div className="App">
      <NavBar />
      <CreatePost handleClick={handleClick} />
      <Select
        options={topicOption}
        placeholder="Filter Topic"
        onChange={handleTopic}
      />
      <Select
        options={weekOption}
        placeholder="Filter Week"
        onChange={handleWeek}
      />
      <Display editPost={editPost} postDB={postDB} deletePost={deletePost} />
    </div>
  );
}

export default App;
