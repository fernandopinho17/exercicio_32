import { combineReducers } from 'redux';
import contactsReducer from './redux/reducers/contactsReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;