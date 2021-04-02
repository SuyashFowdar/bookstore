import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleChangeFilter }) => {
  const [category, setCategory] = useState('All');
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    handleChangeFilter(e.target.value);
  };
  const categories = [
    'All',
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
      Filter:
      <select name="categories" onChange={handleCategoryChange} value={category}>
        {categories.map((cat) => (
          <option key={Math.random()} value={cat}>{cat}</option>
        ))}
      </select>
    </>
  );
};

CategoryFilter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
