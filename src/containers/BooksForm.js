import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const BooksForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = { title, category, id: Math.random() };
    document.querySelector('input').value = '';
    setTitle('');
    if (params.title) {
      addBook(params);
    }
  };
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <>
      <form>
        <input
          type="text"
          required
          placeholder="Add Your Book"
          onChange={handleTitleChange}
          value={title}
        />
        <select name="categories" onChange={handleCategoryChange} value={category}>
          {categories.map((cat) => (
            <option key={Math.random()} value={cat}>{cat}</option>
          ))}
        </select>
        <input type="submit" value="Add Book" onClick={handleSubmit} />
      </form>
    </>
  );
};

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
