import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard'; 
import '../index.css';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('https://finalsbackend.onrender.com/api/v1/book')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error('Error from BookList:', err);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://finalsbackend.onrender.com/api/v1/book/delete/${id}`)
      .then(() => {
        setBooks(books.filter(book => book._id !== id));
      })
      .catch((err) => {
        console.error('Error deleting book:', err);
      });
  };

  const bookList =
    books.length === 0
      ? 'There is no book record!'
      : books.map((book, k) => (
          <div key={k}>
            <BookCard book={book} />
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </div>
        ));

  return (
    <div className='BookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>
          <div className='col-md-11'>
            <Link to='/create-book' className='btn btn-outline-warning float-right'>
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>
        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
}

export default BookList;
