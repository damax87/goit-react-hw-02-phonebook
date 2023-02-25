import { Component } from 'react';

export class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: ''
  }

  handleNameChange = event => {
    this.setState({name: event.currentTarget.value})
  }
  handleNumberChange = event => {
    this.setState({number: event.currentTarget.value})
  }
  render() {

  return (
    <div
        style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <form action="">
        <label>
      Name<input
  type="text"
  name="name"
  value={this.state.name}
  onChange={this.handleNameChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
      </label>
      <label>
      Number<input
  type="tel"
  name="number"
  value={this.state.number}
  onChange={this.handleNumberChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
      </label>
    </form>
  </div>
  );
};
}