import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../index.css';

function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { bookTitle: title, bookAuthor: author, description };

    axios.post('https://finalsbackend.onrender.com/api/v1/book/add', newBook)
      .then(() => {
        navigate('/'); 
      })
      .catch((err) => {
        console.error('Error adding book:', err);
      });
  };

  return (
    <div className='CreateBook'>
      <div className='container'>
        <h2 className='text-center'>Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title:</label>
            <input
              type='text'
              className='form-control'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='author'>Author:</label>
            <input
              type='text'
              className='form-control'
              id='author'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description:</label>
            <textarea
              className='form-control'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>Add Book</button>
          <Link to='/' className='btn btn-secondary ml-2'>Back to Book List</Link> {/* Add this to navigate back */}
        </form>
      </div>
    </div>
  );
}

export default CreateBook;
