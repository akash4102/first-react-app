import React , {useState}from "react";

// const [isDone, setIsDone]=useState(false);
// function handleClick(){
    //     setIsDone(prevValue => !prevValue);
    // }

    // style={{textDecoration: isDone ? "line-through" : "none"}}
function ToDoItem(props){
    return (
        <div onClick={()=>{
            props.onChecked(props.id);
        }}>
            <li>{props.text}</li>
        </div>
    )
     
}

export default ToDoItem;