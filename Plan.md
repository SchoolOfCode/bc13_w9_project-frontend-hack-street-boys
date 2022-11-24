# Build a static Version

npm i to download cypress dependancys
---

> NavBar

1. Register and Login Button

> CreatePost

1. Input: - Topic - Week - Post Textbox
2. Button - Submit

> Display

1. Dropdown - Topic - Week

> Post

1. Tags - Topic - Week - Post

> AddComment

1. Input
2. Button - New comment

> Comment

1. Buttons: - Edit - Delete
2. Tag

# States

---

For each piece of state in your application:

1. Identify *every* component that renders something based on that state.
2. Find their closest common parent component—a component above them all in the hierarchy.
3. Decide where the state should live:
   1. Often, you can put the state directly into their common parent.
   2. You can also put the state into some component above their common parent.
   3. If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.

> App
> STATES
> const [postDB, setPostDB] = useState('')
> const []

function handleClick(topic, week, post){
const newObj= {
id: uuvid,
week: week,
topic: topic,
post_text: post,
}
/API POST/
setPostDB([...postDB, newObj])
}

PROPS
handleClick

> CreatePost
> PROPS
> {handleClick}

handleNewPost(){
handleClick(topic, week, post)
}

STATES
const [topic, setTopic] = useState('')
const [week, setWeek] = useState('')
const [post, setPost] = useState('')

TAGS

The states above update based on onChange function for each input tag.
onClick handleNewPost

1. New post

- topic S onchange
- week S onchange
- post S onchange
- onClick

1. Import useState
2. States:
   - Post state which passes into CreatePost ()

✅✅CreatePost DATA FLOWING JUST FINE✅✅

> Display
> PROPS

- Take in the postDB state

STATE
const [commentDB, setCommentDB] = useState('')

{postDB.map(function(currentpost){
let array = []
for(let i=0; i<commentDB.length; i++){
if(commentDB[i].post_id === currentpost.id){
array.push(commentDB[i])
}
}
return <Post comments={array} topic={currentpost.topic} postText={currentpost.post_text}/>
})}

{comments.map(function(currentItem){ return <Comment comment_text={comment_text}/>})}

> AddComment
> PROPS
> Send down setCommentDB

backend post structure:

{id: 2, user_id: 2, post_text: 'Components let you split the UI into independent, …can find a detailed component API reference here.', week_number: 7, topic: 'components'}

backend comment structure:
{id: 1, user_id: 1, post_id: 1, comment: 'that was cool!'}

# DELETE COMMENT

-useEffect to fetch the api/comments with the id
`http://localhost:3001/api/comments/${id}`

- method: DELETE

useEffect(() => {
// DELETE request using fetch with async/await
async function deleteComment(deleteId)) {
const response = await fetch(`http://localhost:3001/api/comments/${deleteId}`, { method: 'DELETE' });
const data = await response.json()
console.log("this the deleted comment", data)
for (let i = 0; i < commentDB.length; i++){
if (commentDB[i].id === deleteId) {
setCommentDB([...commentDB.splice(0, i), ...commentDB.splice(i+1)]);
}
}
}

    deleteComment();

}, []);

create a state:
const [deleteId, setDeleteId] = useState("")

onClick = {() => {
setDeleteId(commentId);
}}

async function createPost(newObj) {
await fetch('http://localhost:3001/api/posts', {
method: 'POST',
headers: {'content-type': 'application/json'},
mode: 'cors',
body: JSON.stringify(newObj)
})
const response = await fetch(`http://localhost:3001/api/posts`);
const data = await response.json();
setPostDB(data.payload);
};

Create a function in display that is propped down
if canEdit is true and button is true - inside of toggle it does a patch request. 