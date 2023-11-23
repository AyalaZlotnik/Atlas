import { Routes } from '@angular/router';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { WatchListComponent } from './watch-list/watch-list.component';
export const routes: Routes = [
  { path: 'listmovies', component: ListMoviesComponent },
  { path: 'watchlist', component: WatchListComponent },
  { path: '', component: ListMoviesComponent },
];
