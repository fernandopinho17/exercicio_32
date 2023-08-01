// ContactList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from './ContactItem';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
