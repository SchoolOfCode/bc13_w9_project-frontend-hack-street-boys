# Build a static Version
-------------------
> NavBar
1. Register and Login Button

> CreatePost
1. Input:
        - Topic
        - Week
        - Post Textbox 
2. Button - Submit

> Display
1. Dropdown 
        - Topic
        - Week

> Post
1. Tags
        - Topic
        - Week
        - Post

> AddComment
1. Input
2. Button - New comment

> Comment
1. Buttons:
        - Edit
        - Delete
2. Tag

# States
-------------------
For each piece of state in your application:

1. Identify *every* component that renders something based on that state.
2. Find their closest common parent component—a component above them all in the hierarchy.
3. Decide where the state should live:
    1. Often, you can put the state directly into their common parent.
    2. You can also put the state into some component above their common parent.
    3. If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.

> App
STATES
const [postDB, setPostDB] = useState('')
const []

function handleClick(topic, week, post){
   const newObj=  {
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
>CreatePost
PROPS
{handleClick}

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
PROPS
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


>AddComment
PROPS 
Send down setCommentDB

