import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleChangeFilter }) => {
  const [category, setCategory] = useState('All');
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
    <div className="row cross-center nav-container">
      {categories.map((cat) => (
        <button type="button" className={`Text-Style-5 link nav ${category === cat ? 'selected-nav' : ''}`} key={Math.random()} onClick={() => { setCategory(cat); handleChangeFilter(cat); }}>{cat}</button>
      ))}
    </div>
  );
};

CategoryFilter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
