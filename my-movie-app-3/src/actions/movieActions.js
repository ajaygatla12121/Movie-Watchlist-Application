

export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const editMovie = (movie) => ({
  type: EDIT_MOVIE,
  payload: movie,
});

export const deleteMovie = (id) => ({
  type: DELETE_MOVIE,
  payload: id,
});



