import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions';

const BooksList = ({
  filter,
  books,
  handleChangeFilter,
  handleRemoveBook,
}) => {
  useEffect(() => {
    handleChangeFilter(books, 'All');
  }, []);

  useEffect(() => {
    handleChangeFilter(books, 'All');
  }, [books]);

  return (
    <div>
      <h1>Book Store</h1>
      <CategoryFilter
        handleChangeFilter={(filterType) => { handleChangeFilter(books, filterType); }}
        filter={filter}
      />
      <table className="centered highlight">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filter.filteredBooks.map((book, index) => (
            <Book
              title={book.title}
              category={book.category}
              id={index + 1}
              key={book.id}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  filter: PropTypes.instanceOf(Object).isRequired,
  books: PropTypes.instanceOf(Array).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handleRemoveBook: (book) => {
    dispatch(removeBook(book));
  },
  handleChangeFilter: (books, filter) => {
    dispatch(changeFilter(books, filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
