


import { ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE } from '../actions/movieActions';

const initialState = [];

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return [...state, action.payload];
    case EDIT_MOVIE:
      return state.map(movie =>
        movie.id === action.payload.id ? action.payload : movie
      );
    case DELETE_MOVIE:
      return state.filter(movie => movie.id !== action.payload);
    default:
      return state;
  }
};

export default moviesReducer;
