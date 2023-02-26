import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { FormContact } from "./ContactForm.style";
import { FormInput } from "./ContactForm.style";
import { FormButton } from "./ContactForm.style";

class ContactForm extends Component {
    state ={
        name: '',
        number: ''
    };
    
    nameInputId = nanoid();
    numberInputId = nanoid();

    handleChange = event => {
      const { name, value } = event.currentTarget;
      this.setState({
        [name]: value,
      });
    };

    handleSubmit = event => {
      event.preventDefault();

      this.props.onSubmit(this.state);

      this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render () {
    return (
    <FormContact onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
      Name<FormInput
  type="text"
  name="name"
  value={this.state.name}
  onChange={this.handleChange}
  id={this.nameInputId}
  placeholder='Ex: David Guetta'
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
      </label>
      <label htmlFor={this.numberInputId}>
      Number<FormInput
  type="tel"
  name="number"
  value={this.state.number}
  onChange={this.handleChange}
  id={this.numberInputId}
  placeholder='Ex: XXX-XX-XX'
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
      </label>

      <FormButton type='submit'>Add Contact</FormButton>
    </FormContact>
    )};
}

export default ContactForm;