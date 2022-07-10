import PropTypes from 'prop-types';


 const ContactItem = ({ name, number, onButtonDelete }) => {
  return (
    <li>
      {name}: {number}
      <button
        name="button"
        type="button"
        onClick={onButtonDelete}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onButtonDelete: PropTypes.func,
};

export { ContactItem };