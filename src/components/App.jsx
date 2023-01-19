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

function App(){
    const [count,setCount]=useState(0);
    function increase(){
        setCount(count+1);
    }
    function decrease(){
        setCount(count-1);
    }
    return (
        <div className='container'>
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        </div>
    );
}

export default App;

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


