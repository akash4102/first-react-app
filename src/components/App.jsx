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

function App(){
    const [name,setName]=useState("");
    const [headingText,setHeading]=useState("");
    function handleChange(event){
        setName(event.target.value);
    }
    function handleClick(event){
        setHeading(name);

        event.preventDefault();
    }
    return (
        <div className="container">
          <h1>Hello {headingText}</h1>
          <form onSubmit={handleClick}>
            <input onChange={handleChange} type="text" value={name} placeholder="What's your name?" />
            <button type="submit" >Submit</button>
          </form>
        </div>
      );
    }
    
    export default App;
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


