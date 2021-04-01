export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const createBook = (book) => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

export const changeFilter = (books, filter) => ({
  type: CHANGE_FILTER,
  books,
  filter,
});
