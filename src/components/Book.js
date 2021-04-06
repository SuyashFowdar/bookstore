import React from 'react';
import PropTypes from 'prop-types';
import oval from '../assets/img/oval.png';

const Book = ({
  title,
  category,
  id,
  handleRemoveBook,
}) => (
  <>
    <article className="row main-space-between">
      <div className="flex">
        <div className="Text-Style-8">{category}</div>
        <div className="Text-Style-6">{title}</div>
        <div className="Text-Style-11">Author</div>
        <div className="row">
          <button type="button" onClick={() => {}} className="link actions Text-Style-11">Comment</button>
          <button type="button" onClick={() => handleRemoveBook({ id })} className="link actions Text-Style-11">Remove</button>
          <button type="button" onClick={() => {}} className="link actions Text-Style-11">Edit</button>
        </div>
      </div>
      <div className="row w-30 cross-center">
        <img src={oval} alt="" style={{ height: '88px', width: '88px' }} />
        <div className="col cross-center">
          <div className="Text-Style-12">64%</div>
          <div className="Text-Style-8">Completed</div>
        </div>
      </div>
      <div className="col w-30 main-space-around">
        <div className="Text-Style-13">CURRENT CHAPTER</div>
        <div className="Text-Style-14">Chapter 17</div>
        <button type="button" className="Text-Style-13 progress-button link">UPDATE PROGRESS</button>
      </div>
    </article>
  </>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
