import PropTypes from 'prop-types';


 const ContactItem = ({ name, number, buttonDelete }) => {
  return (
    <li>
      {name}: {number}
      <button
        name="button"
        type="button"
        buttonDelete={buttonDelete}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  buttonDelete: PropTypes.func.isRequired,
};

export { ContactItem };