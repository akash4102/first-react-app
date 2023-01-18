import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import contacts from './contacts';

function Card(props){
    return (
        <div className='card'>
            <div className='top'>
                <h2 className='name'>{props.name}</h2>
                <img className='circle-img' src={props.img} alt="avatar_img"/>
            </div>
            <div className='bottom'>
                <p className='info'>{props.tel}</p>
                <p className='info'>{props.email}</p>
            </div>
        </div>
    )

}
function App(){
    return <div>
        <h1 className='heading'>My Contacts</h1>
        <Card 
            name={contacts[0].name}
            img={contacts[0].imgURL}
            tel={contacts[0].phone}
            email={contacts[0].email}
        />
        <Card 
            name={contacts[1].name}
            img={contacts[1].imgURL}
            tel={contacts[1].phone}
            email={contacts[1].email}
        />
        <Card 
            name={contacts[2].name}
            img={contacts[2].imgURL}
            tel={contacts[2].phone}
            email={contacts[2].email}
        />
    </div>
}

export default App;

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.

{/* <Header />
<Note />
<Footer /> */}

