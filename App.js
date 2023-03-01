import React, {useState,useEffect} from 'react';
// import {BrowserRouter as Router , Route} from 'react-router-dom';
import {uuid} from 'uuidv4';
import './App.css';
import Header from './component/Header';
import AddContact from './component/AddContact';
import ContactList from './component/ContactList';

function App() {
  const originalData= "contacts";
  const [contacts, setContacts] = useState(
    ()=>{
      return JSON.parse(localStorage.getItem(originalData))
     || []});
  const addContactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts,{id: uuid(),...contact}]); 
};
      const removeContactHandler = (id) => {
         const newContactList = contacts.filter((contact)=>{
          return contact.id !== id;
         });
      setContacts(newContactList);
        };
        
    useEffect(()=>{
      const retriveContacts = JSON.parse(localStorage.getItem(originalData));
      if(retriveContacts)  setContacts(retriveContacts);
    }, []);

    useEffect(()=>{
        (localStorage.setItem(originalData, JSON.stringify(contacts)))
    },[contacts]);

    

  return (
   <div className="ui container">
    
    <Header />
    
     <AddContact addContactHandler ={addContactHandler}/>
    <ContactList contacts={contacts} getContactId={removeContactHandler}/>

    
   </div>
  );
}

export default App;
