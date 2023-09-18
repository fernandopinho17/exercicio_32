import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../actions';

const EditContact = ({ contact, onClose }) => {
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateContact(contact.id, { name, email, phone }));
        onClose();
    };

    return (
    <div>
        <h2>Editar Contato</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="tel"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Salvar</button>
        <button onClick={onClose}>Cancelar</button>
        </form>
    </div>
    );
};

export default EditContact;
