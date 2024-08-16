// BookCard.jsx
import React from 'react';

function BookCard({ book }) {
  return (
    <div className='card-container'>
      <div className='desc'>
        <h2>{book.title}</h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default BookCard;
