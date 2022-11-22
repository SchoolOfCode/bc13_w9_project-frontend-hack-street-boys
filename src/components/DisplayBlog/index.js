import './index.css';

function DisplayBlog() {

    const blog = {id: 1, week: 8, topic: "useEffect", post_text: "useEffect is very useful", comment_id: 4}
    const comments = {}

  return (
    <div className="blog">
        <div>
            <p>{blog.topic}</p>
            <p>{blog.week}</p>
        </div>
        <p>{blog.post_text}</p>
        <div>
            <p>This is a comment</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
        <form>
            <input type="text" placeholder="Add a Comment..."></input>
            <input type="text" placeholder="Enter name"></input>
            <button>Submit</button>
        </form>
    </div>
  );
}

export default DisplayBlog;