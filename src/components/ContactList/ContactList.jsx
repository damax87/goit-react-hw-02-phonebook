import propTypes from 'prop-types';
import { ContactListCantainer } from './ContactList.style';
import { ContactListItem } from './ContactList.style';
import { ContactListButton } from './ContactList.style';


export const ContactList = ({ contacts, handleDelete }) => (
    <ContactListCantainer>
{contacts.map((contact, id) => (
  <ContactListItem key={id}>
    {contact.name}: {contact.number}
    <ContactListButton type="button" onClick={() => handleDelete(contact.id)}>Delete
    </ContactListButton>
  </ContactListItem>
))}  
    </ContactListCantainer>
  );
  
  ContactList.propTypes = {
    contacts: propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
      })
    ),
    handleDelete: propTypes.func.isRequired,
  };
