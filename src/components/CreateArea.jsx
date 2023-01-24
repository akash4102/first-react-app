import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;


// import { calculateNewValue } from "@testing-library/user-event/dist/utils";
// import React, { useState } from "react";

// function CreateArea(props) {
//     const [note,setNote]=useState({
//         title:"",
//         content:""
//     });
//     function changeNote(event){
//         const {value:newValue ,name:inputName}=event.target;
//         setNote((prevValue)=> {
//             return {...prevValue,[inputName] :newValue}
//         });
//     }
//     const handleSubmit = event => {
//         event.preventDefault();
//     };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="create-note">
//         <input onChange={changeNote} value={note.title} name="title" placeholder="Title" />
//         <textarea onChange={changeNote} value={note.content} name="content" placeholder="Take a note..." rows="3" />
//         <button onClick={()=>{
//           props.add(note);
//           setNote({
//               title:"",
//               content:""
//           });
//         }}>Add</button>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;
