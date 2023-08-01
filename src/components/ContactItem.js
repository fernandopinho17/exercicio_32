// ContactItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../redux/actions/contactsActions';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  return (
    <div>
      <p>{contact.fullName}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button onClick={handleRemove}>Remover</button>
    </div>
  );
};

export default ContactItem;
