import './index.css';
import Comment from '../Comment';
import AddComment from '../AddComment';

function Post() {
    const post = [{id: 1, week: 8, topic: "useEffect", post_text: "useEffect is very useful", comment_id: 4}]
  return (
    <div className="blog">
        <div>
            <p>{post.topic}</p>
            <p>{post.week}</p>
        </div>
        <p>{post.post_text}</p>
        <div className="comments">
            <Comment />
        </div>
        <AddComment />
    </div>
  );
}

export default Post;