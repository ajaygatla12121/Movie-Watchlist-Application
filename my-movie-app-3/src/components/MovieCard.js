

import React from 'react';
import { useDispatch } from 'react-redux';
import { editMovie, deleteMovie } from '../actions/movieActions';
import { Link } from 'react-router-dom'; 

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleWatchedToggle = () => {
    dispatch(editMovie({...movie, watched: !movie.watched }));
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${movie.title}?`)) {
      dispatch(deleteMovie(movie.id));
    }
  };

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>
      <p>Rating: {movie.rating}/5</p>
      <p>Review: {movie.review}</p>
      <div className="movie-actions">
        <button onClick={handleWatchedToggle}>
          Mark as {movie.watched ? 'Unwatched' : 'Watched'}
        </button>
        <Link to={`/edit-movie/${movie.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default MovieCard;

