import React from 'react';

const BooksForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
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
        <input type="text" required placeholder="Add Your Book" />
        <select name="categories">
          {categories.map(category => (
            <option key={Math.random()} value={category}>{category}</option>
          ))}
        </select>
        <input type="submit" value="Add Book" onClick={handleSubmit} />
      </form>
    </>
  );
};

export default BooksForm;
