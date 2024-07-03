

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../actions/movieActions';
import { useNavigate } from 'react-router-dom';
import '../styles/AddMovieForm.css';

const AddMovieForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [watched, setWatched] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentYear = new Date().getFullYear();

    if (releaseYear.length !== 4 || releaseYear > currentYear) {
      alert('Please enter a valid release year.');
      return;
    }

    const newMovie = {
      id: Date.now(),
      title,
      description,
      releaseYear,
      genre,
      watched,
      rating,
      review,
    };
    dispatch(addMovie(newMovie));
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Release Year:
        <input
          type="number"
          className="no-spinner"
          value={releaseYear}
          onChange={(event) => setReleaseYear(event.target.value)}
          required
        />
      </label>
      <label>
        Genre:
        <input
          type="text"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
          required
        />
      </label>
      <label>
        Watched:
        <input
          type="checkbox"
          checked={watched}
          onChange={(event) => setWatched(event.target.checked)}
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          min="0"
          max="10"
        />
      </label>
      <label>
        Review:
        <textarea
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
      </label>
      <div>
        <button type="submit" className="submit-button">Add Movie</button>
        <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default AddMovieForm;
