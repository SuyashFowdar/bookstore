import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  title,
  category,
  id,
  handleRemoveBook,
}) => (
  <>
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={() => handleRemoveBook({ id })}>Remove</button></td>
    </tr>
  </>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
