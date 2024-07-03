
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteMovie } from '../actions/movieActions';

const MovieDetails = () => {
  const { id } = useParams();
  const movieId = parseInt(id);
  const movie = useSelector((state) => state.movies.find((movie) => movie.id === movieId));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleEdit = () => {
    navigate(`/edit-movie/${movie.id}`);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${movie.title}?`);
    
    if (confirmDelete) {
      dispatch(deleteMovie(movieId));
      navigate('/');
    }
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default MovieDetails;
