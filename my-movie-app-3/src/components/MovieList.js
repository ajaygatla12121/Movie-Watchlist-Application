


import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import '../styles/MovieList.css';

const MovieList = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div>
       <h1 className='title'>Movie Watchlist application</h1>
      <Link to="/add-movie" className="add-movie">Add New Movie</Link>
      <ol>
        {movies.map((movie, index) => (
          <li key={movie.id} className="movie-item">
            <MovieCard movie={movie} />
            {/* <div>
              <Link to={`/edit-movie/${movie.id}`}>Edit</Link>
            </div> */}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MovieList;

