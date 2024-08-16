import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './Components/BookList';
import CreateBook from './Components/CreateBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/create-book" element={<CreateBook />} />
      </Routes>
    </Router>
  );
}

export default App;
