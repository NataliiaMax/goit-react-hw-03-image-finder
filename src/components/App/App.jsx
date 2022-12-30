import React from 'react';
import ContactForm from '../AddForm/AddForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { nanoid } from 'nanoid';
import style from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addUser = data => {
    const { contacts } = this.state;
    const newUser = {
      ...data,
      id: nanoid(),
    };

    if (
      contacts.find(el => el.name.toLowerCase() === data.name.toLowerCase())
    ) {
      return alert(`${data.name} is already in contacts.`);
    }

    this.setState(prevState => ({
      contacts: [newUser, ...prevState.contacts],
    }));
  };

  deleteUser = userId => {
    this.setState(prevSate => ({
      contacts: prevSate.contacts.filter(({ id }) => id !== userId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return (
      <div className={style.container}>
        <h1 className={style.titleBook}>Phonebook</h1>
        <ContactForm addUser={this.addUser} />
        <h2 className={style.titleContacts}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} deleteUser={this.deleteUser} />
      </div>
    );
  }
}

export default App;
