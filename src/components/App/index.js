import Display from "../Display";
import NavBar from "../NavBar";
import CreatePost from "../CreatePost";
import "./index.css";
import { useState } from "react";

//import POST DATABASE
const POST = [
  {
    id: 4,
    week: 8,
    topic: "useEffect",
    post_text: "useEffect helps aviod sideEffects",
  },
  {
    id: 5,
    week: 3,
    topic: "UI/UX",
    post_text: "Seeing design from a users prepective is key",
  },
];

function App() {
  const [postDB, setPostDB] = useState(POST);

  function handleClick(topic, week, post) {
    const newObj = {
      id: 2,
      week: Number(week),
      topic: topic,
      post_text: post,
    };
    //API POST
    setPostDB([...postDB, newObj]);
    console.log("postDB", postDB);
  }

  return (
    <div className="App">
      <NavBar />
      <CreatePost handleClick={handleClick} />
      <Display postDB={postDB} />
    </div>
  );
}

export default App;
