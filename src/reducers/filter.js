const filterReducer = (state = { filter: 'All', filteredBooks: [] }, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        filter: action.filter,
        filteredBooks: action.filter === 'All' ? action.books : action.books.filter((el) => el.category === action.filter),
      };
    default:
      return state;
  }
};

export default filterReducer;
