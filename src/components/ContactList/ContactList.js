import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactList/ContactItem';


 const ContactList = ({ contacts, onButtonDelete}) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onButtonDelete={onButtonDelete}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;