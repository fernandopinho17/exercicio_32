// ContactForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../redux/actions/contactsActions';

const ContactForm = ({ contactToEdit }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: contactToEdit ? contactToEdit.fullName : '',
    email: contactToEdit ? contactToEdit.email : '',
    phone: contactToEdit ? contactToEdit.phone : '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactToEdit) {
      dispatch(editContact(contactToEdit.id, formData));
    } else {
      dispatch(addContact({ ...formData, id: Date.now() }));
    }
    setFormData({ fullName: '', email: '', phone: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Nome completo"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="E-mail"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Telefone"
      />
      <button type="submit">{contactToEdit ? 'Editar' : 'Adicionar'}</button>
    </form>
  );
};

export default ContactForm;
