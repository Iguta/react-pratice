import React, {useEffect, useState} from 'react';

//styled-components
import { Wrapper, ContactContent } from './ContactManager.styles';

const initialContacts = ['John', 'Mary', 'Grace', 'Georgina'];



const ContactManager = () => {

const [contacts, setContacts] = useState(initialContacts); 
function addContact(e) {
  e.preventDefault();
  initialContacts.push("Dave")
}

useEffect(()=> {
    setContacts(initialContacts);
})
  return (
    <Wrapper>
      <form>
        <input type="text" placeholder="Enter Contact"></input>
        <button type="submit"
        onClick={addContact(event)}>Add</button>
      </form>
      <ContactContent>
        {
          contacts.map( contact => (
            <li>{contact}</li>
          ))
        }
      </ContactContent>
    </Wrapper>
  );
};

export default ContactManager;
