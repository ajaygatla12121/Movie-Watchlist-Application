

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import AddMovieForm from './components/AddMovieForm';
import EditMovieForm from './components/EditMovieForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/add-movie" element={<AddMovieForm />} />
      <Route path="/edit-movie/:id" element={<EditMovieForm />} />
    </Routes>
  </Router>
);

export default App;


