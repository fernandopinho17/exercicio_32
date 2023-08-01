export const addContact = (contact) => {
    return { type: 'ADD_CONTACT', payload: contact };
  };
  
  export const removeContact = (id) => {
    return { type: 'REMOVE_CONTACT', payload: id };
  };
  
  export const editContact = (id, updatedContact) => {
    return { type: 'EDIT_CONTACT', payload: { id, updatedContact } };
  };