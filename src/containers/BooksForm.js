import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const BooksForm = props => {
  const [title, setTitle] = React.useState(null);
  const [category, setCategory] = React.useState(null);
  const { addBook } = props;
  const handleChange = () => {
    setTitle(document.querySelector('input').value);
    setCategory(document.querySelector('select').value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const params = { title, category, id: Math.random() };
    document.querySelector('input').value = '';
    setTitle('');
    if (params.title) addBook(params);
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
          onChange={handleChange}
        />
        <select name="categories" onChange={handleChange}>
          {categories.map(category => (
            <option key={Math.random()} value={category}>{category}</option>
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

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
