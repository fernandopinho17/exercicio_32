import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from './ContactItem';
import { deleteContact } from '../redux/actions/contactsActions';
import EditContact from './EditContact';



const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-undef
  const [editContact, setEditContact] = useState(null);

  const handleEdit = (contact) => {
    setEditContact(contact);
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <><div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div><div>
        <h2>Lista de Contatos</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} - {contact.email} - {contact.phone}
              <button onClick={() => handleDelete(contact.id)}>Excluir</button>
              <button onClick={() => handleEdit(contact)}>Editar</button>
            </li>
          ))}
        </ul>
        {editContact && (
          <EditContact contact={editContact} onClose={() => setEditContact(null)} />
        )}
      </div></>
  );
};

export default ContactList;



