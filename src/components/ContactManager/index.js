import React, {useEffect, useState} from 'react';

//styled-components
import { Wrapper, ContactContent } from './ContactManager.styles';

const initialContacts = ['John', 'Mary', 'Grace', 'Georgina'];



const ContactManager = () => {

const [contacts, setContacts] = useState(initialContacts); 

function handleSubmit(e){
  
  const newCcontact = e.target.elements.contactField.value;
  setContacts([...contacts, newCcontact]);
  e.preventDefault();
}
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Contact" name="contactField"></input>
        <button type="submit">Add</button>
      </form>
      <ContactContent>
      <ul>
        {
          contacts.map( contact => (
            <li>{contact}</li>
          ))
        }
        </ul>
      </ContactContent>
    </Wrapper>
  );
};

export default ContactManager;
