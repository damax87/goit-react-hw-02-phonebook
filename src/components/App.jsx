import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {

  state = {
    contacts: [],
    filter: '' 
  }
 
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

    addContact = data => {
    
      const id = nanoid();
      const name = data.name;
      const number = data.number;
      const contactsList = [...this.state.contacts];
    
      if (contactsList.findIndex(contact => name === contact.name) !== -1) {
        alert(`${name} is already in contacts.`);
      } else {
        contactsList.push({ name, id, number });
      }

    this.setState ({ contacts: contactsList });

  };

    handleDelete = event => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== event),
    }));
  };

  getFilteredContacts = () => {
    const filterContactsList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return filterContactsList;
  };

  render() {
      const { filter } = this.state;
  return (
    <div
        style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Phonebook">
      <ContactForm onSubmit={this.addContact}/>
      </Section>
      <Section title="Contacts">
      <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList
          contacts={this.getFilteredContacts()}
          handleDelete={this.handleDelete}
        />
        </Section>
  </div>
  );
};
}