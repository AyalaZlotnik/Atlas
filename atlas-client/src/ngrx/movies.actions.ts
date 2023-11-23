import { createAction, props } from '@ngrx/store';
import { ItemData } from '../app/types/data.type';

export const addMovieToWatchList = createAction(
  '[ListMoviesComponent] Update Variable',
  props<{ newValue: ItemData }>()
);
