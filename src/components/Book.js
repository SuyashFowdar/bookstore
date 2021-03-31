import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';

const Book = ({
  title,
  category,
  id,
  deleteBook,
}) => (
  <>
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={() => deleteBook({ id })}>Remove</button></td>
    </tr>
  </>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  deleteBook: book => {
    dispatch(removeBook(book));
  },
});
export default connect(null, mapDispatchToProps)(Book);
