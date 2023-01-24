import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;



// import React from "react";

// function Note(props) {
//   return (
//     <div className="note">
//       <h1>{props.title}</h1>
//       <p>{props.content}</p>
//       <button onClick={()=>{
//         props.deleteNote(props.id);
//       }}>DELETE</button>
//     </div>
//   );
// }

// export default Note;
