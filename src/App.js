// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyles from './styles/GlobalStyles';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import  Container  from './styles';


const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <div>
          <h1>Lista de Contatos</h1>
          <ContactForm />
          <ContactList />
        </div>
      </Container>
    </Provider>
  );
};

export default App;
