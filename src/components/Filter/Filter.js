import React from 'react';

import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  return (
    <label>
      Find contacts by name
      <input
        name="filter"
        onChange={onChange}
        type="text"
        value={value}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};