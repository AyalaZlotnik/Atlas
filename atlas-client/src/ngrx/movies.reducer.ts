import { createReducer, on } from '@ngrx/store';
import { addMovieToWatchList } from './movies.actions';
import { AppState } from './movies.state';

export const initialState: AppState = {
  listMovies: [],
};

export const appReducer = createReducer(
  initialState,
  on(addMovieToWatchList, (state, { newValue }) => {
    let newMovieToAddOrRemove = state.listMovies.find(
      (movie) => movie.imdbID === newValue.imdbID
    );
    if (newMovieToAddOrRemove) {
      return {
        ...state,
        ['listMovies']: [
          ...state.listMovies.filter(
            (movie) => movie.imdbID !== newValue.imdbID
          ),
        ],
      };
    } else {
      return {
        ...state,
        ['listMovies']: [...state.listMovies, newValue],
      };
    }
  })
);
