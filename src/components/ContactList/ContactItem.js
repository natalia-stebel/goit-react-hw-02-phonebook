import PropTypes from 'prop-types';


 const ContactItem = ({ id, name, number, onButtonDelete }) => {
  return (
    <li>
      {name}: {number}
      <button
        name="button"
        type="button"
        onClick={() => onButtonDelete(id)}
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