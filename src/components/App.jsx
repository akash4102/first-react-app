import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import contacts from './contacts';
import Card from './Card';
import Avatar from './Avatar';
import emojipedia from './emojjipedia';
import Emojjis from './EmojJis';
import notes from './notes';
import Login from './Login';
import Register from './Register';
import cars from './practice';
import animals from './data';
import ToDoItem from './ToDoItem';
import InputArea from './InputArea';


// function createCard(contact){
//     return (
//     <Card 
//         id={contact.id}
//         key={contact.id}
//         name={contact.name}
//         img={contact.imgURL}
//         tel={contact.phone}
//         email={contact.email}
//     />
//     );
// }

// function Entry(data){
//     return (
//         <Emojjis 
//             key={data.id}
//             img={data.emoji}
//             name={data.name}
//             mean={data.meaning}
//         />
//     )
// }

// var isRegistered=true;
// function App(){
//     return (
//         <div className="container">
//         {isRegistered===true ? <Login /> : <Register />}
//         </div>
//     );
// }

// let [honda ,tesla]=cars
// var {speedStats : {topSpeed:teslaTopSpeed},coloursByPopularity: [teslaTopColour]}=tesla;

// var {speedStats : {topSpeed:hondaTopSpeed},coloursByPopularity: [hondaTopColour]}=honda;



// const [headingText,setHeadingText]=useState("Hello")
// const [bgColor,setBgColor]=useState("white");
// function handleClick(){
//     setHeadingText("submitted");

// }
// function over(){
//     setBgColor("black");
// }
// function out(){
//     setBgColor("white");
// }

// function App(){
//     const [name,setName]=useState("");
//     const [headingText,setHeading]=useState("");
//     function handleChange(event){
//         setName(event.target.value);
//     }
//     function handleClick(event){
//         setHeading(name);

//         event.preventDefault();
//     }
//     return (
//         <div className="container">
//           <h1>Hello {headingText}</h1>
//           <form onSubmit={handleClick}>
//             <input onChange={handleChange} type="text" value={name} placeholder="What's your name?" />
//             <button type="submit" >Submit</button>
//           </form>
//         </div>
//       );
//     }
  // function App() {
  //   // const [fName,setFName]=useState("");
  //   // const [lName,setLName]=useState("");

  //   // function updateFName(event){
  //   //   setFName(event.target.value);
  //   // }
  //   // function updateLName(event){
  //   //   setLName(event.target.value)
  //   // }

  //   const [fullName, setFullName]=useState({
  //     fName: "",
  //     lName: ""
  //   });
  //   function handleChange(event){
  //     // const newValue=event.target.value;
  //     // const inputName=event.target.name;
  //     // setFullName({inputName : newValue});
  //     const {value:newValue,name:inputName}=event.target;
  //     setFullName((prevValue)=>{
  //       if(inputName==="fName"){
  //         return {
  //           fName:newValue,
  //           lName:prevValue.lName
  //         }
  //       }
  //       else if(inputName==="lName"){
  //         return {
  //           fName:prevValue.fName,
  //           lName:newValue
  //         }
  //       }
  //     });
  //   }
  //   return (
  //     <div className="container">
  //       <h1>
  //         {/* Hello {fName} {lName} */}
  //         Hello {fullName.fName} {fullName.lName}
  //       </h1>
  //       <form>
  //         <input 
  //           onChange={handleChange}  
  //           name="fName" 
  //           placeholder="First Name" 
  //           value={fullName.fName}
  //         />
  //         <input 
  //           onChange={handleChange}  
  //           name="lName" 
  //           placeholder="Last Name" 
  //           value={fullName.lName}
  //         />
  //         <button>Submit</button>
  //       </form>
  //     </div>
  //   );
  // }
  function App() {

    const[items,setItems]=useState([]);
    function addItem(inputText){
      setItems( prevItems => [...prevItems,inputText]);
    }
    function deleteItem(id){
      setItems((prevItems)=>{
        return prevItems.filter((item,index)=>{
          return index!==id;
        })
      })
    }
    return (
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
          <InputArea onAdd={addItem}/>
        <div>
          <ul>
            {items.map((todoItem,index) => <ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem}/> )}
          </ul>
        </div>
      </div>
    );
  }
  export default App;

  //CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s



    // function App() {
    //   const [contact, setContact] = useState({
    //     fName: "",
    //     lName: "",
    //     email: ""
    //   });
    
    //   function handleChange(event){
    //     const {value:newValue,name:inputName}=event.target;
        
    //     setContact((prevValue)=>{
    //       // if(inputName==='fName'){
    //       //   return {
    //       //     fName:newValue,
    //       //     lName:prevValue.lName,
    //       //     email:prevValue.email
    //       //   }
    //       // }
    //       // else if(inputName==='lName'){
    //       //   return {
    //       //     fName:prevValue.fName,
    //       //     lName:newValue,
    //       //     email:prevValue.email
    //       //   }
    //       // }
    //       // else if(inputName==='email'){
    //       //   return {
    //       //     fName:prevValue.fName,
    //       //     lName:prevValue.lName,
    //       //     email:newValue
    //       //   }
    //       // }
    //       return{
    //         ...prevValue,
    //         [inputName] :newValue
    //       }
    //     });
    //   }


    
    //   return (
    //     <div className="container">
    //       <h1>
    //         Hello {contact.fName} {contact.lName}
    //       </h1>
    //       <p>{contact.email}</p>
    //       <form>
    //         <input 
    //           name="fName" 
    //           placeholder="First Name" 
    //           onChange={handleChange}
    //           value={contact.fName}
    //         />
    //         <input 
    //           name="lName" 
    //           placeholder="Last Name"
    //           onChange={handleChange}
    //           value={contact.lName}
    //          />
    //         <input 
    //           name="email" 
    //           placeholder="Email" 
    //           onChange={handleChange}
    //           value={contact.email}
    //         />
    //         <button>Submit</button>
    //       </form>
    //     </div>
    //   );
    // }




    //CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events


    {/* <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:bgColor}} onMouseOver={over} onMouseOut={out} onClick={handleClick}>Submit</button>
    </div> */}
    //   <table>
    //     <tr>
    //       <th>Brand</th>
    //       <th>Top Speed</th>
    //     </tr>
    //     <tr>
    //       <td>{tesla.model}</td>
    //       <td>{teslaTopSpeed}</td>
    //       <td>{teslaTopColour}</td>
    //     </tr>
    //     <tr>
    //       <td>{honda.model}</td>
    //       <td>{hondaTopSpeed}</td>
    //       <td>{hondaTopColour}</td>
    //     </tr>
    //   </table>
// let now=new Date().toTimeString().slice(0,8)
// const [time,setTime]=useState(now);
// console.log(now);
// const updateTime=()=>{
//     const newTime=new Date().toTimeString().slice(0,8)
//     setTime(newTime);
// }
// setInterval(updateTime, 1000);
// return (
//     <div className='container'>
//         <h1>{time}</h1>
//         <button onClick={updateTime}>Get Time</button>
//     </div>
// );
// const [count,setCount]=useState(0);
// function increase(){
//     setCount(count+1);
// }
// function decrease(){
//     setCount(count-1);
// }
// return (
//     <div className='container'>
//     <h1>{count}</h1>
//     <button onClick={increase}>+</button>
//     <button onClick={decrease}>-</button>
//     </div>
// );

{/* <Header />
{notes.map(data => <Note key={data.key} title={data.title} content={data.content}/>)}
<Footer /> */}
{/* <h1> <span>emojipedia</span> </h1>
<dl className='dictionary'>
    {emojipedia.map(Entry)}
</dl> */}
{/* <h1 className='heading'>My Contacts</h1> */}
{/* {contacts.map(createCard)} */}
{/* <Avatar img={contacts[0].imgURL}/> */}
//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.


