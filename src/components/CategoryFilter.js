import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filter, handleChangeFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState(filter.filter);
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

  useEffect(() => {
    setSelectedFilter(filter.filter);
  }, [filter.filter]);

  return (
    <>
      {categories.map((category) => (
        <button className="category-selector" type="button" key={category} onClick={() => { setSelectedFilter(category); handleChangeFilter(category); }}>
          <input key={category} type="radio" name="checkbox" value={category} checked={category === selectedFilter} onChange={() => {}} />
          {category}
        </button>
      ))}
    </>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.instanceOf(Object).isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
