
// contactsReducer.js
const initialState = {
    contacts: [],
  };
  
  const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return { ...state, contacts: [...state.contacts, action.payload] };
      case 'REMOVE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.filter((contact) => contact.id !== action.payload),
        };
      case 'EDIT_CONTACT':
        return {
          ...state,
          contacts: state.contacts.map((contact) =>
            contact.id === action.payload.id ? action.payload.updatedContact : contact
          ),
        };
        case 'UPDATE_CONTACT':
        const updatedContacts = state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return { ...contact, ...action.payload.updatedContact };
          }
          return contact;
        });
        return {
          ...state,
          contacts: updatedContacts,
        };
      default:
        return state;
    }
  };

  export default contactsReducer;
