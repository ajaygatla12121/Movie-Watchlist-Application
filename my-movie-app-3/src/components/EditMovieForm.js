


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editMovie } from '../actions/movieActions';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/EditMovieForm.css'; 

const EditMovieForm = () => {
  const { id } = useParams(); 
  const movie = useSelector((state) => state.movies.find((movie) => movie.id === parseInt(id)));
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [watched, setWatched] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setDescription(movie.description);
      setReleaseYear(movie.releaseYear);
      setGenre(movie.genre);
      setWatched(movie.watched);
      setRating(movie.rating);
      setReview(movie.review);
    }
  }, [movie]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentYear = new Date().getFullYear();

    if (releaseYear.length !== 4 || releaseYear > currentYear) {
      alert('Please enter a valid release year.');
      return;
    }

    const updatedMovie = {
      id: parseInt(id), 
      title,
      description,
      releaseYear,
      genre,
      watched,
      rating,
      review
    };
    dispatch(editMovie(updatedMovie));
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
      <button type="submit">Save Changes</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default EditMovieForm;
