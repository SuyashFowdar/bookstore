import * as actionTypes from '../actions/index';

const defaultState = [
  { title: 'The crow and the fox', category: 'Kids', id: Math.random() },
  { title: 'The wide field', category: 'Horror', id: Math.random() },
  { title: 'Planet Y', category: 'Sci-Fi', id: Math.random() },
];

const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_BOOK:
      return [...state, action.book];
    case actionTypes.REMOVE_BOOK:
      return state.filter((el, index) => index !== action.book.id - 1);
    default:
      return state;
  }
};

export default booksReducer;
