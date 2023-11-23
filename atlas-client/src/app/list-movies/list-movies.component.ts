import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { State, Store, StoreModule, select } from '@ngrx/store';

import { addMovieToWatchList } from '../../ngrx/movies.actions';
import { AppState } from '../../ngrx/movies.state';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ItemData } from '../types/data.type';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [
    CommonModule,
    NzListModule,
    NzIconModule,
    NzInputModule,
    FormsModule,
    StoreModule,
  ],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css',
})
export class ListMoviesComponent implements OnInit {
  searchInput: string;
  newMovieToAdd: any;
  listMovies: any;
  myState: any;
  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private state: State<AppState>
  ) {
    this.searchInput = '';
  }

  subscription: Subscription = new Subscription();
  data: ItemData[] = [];

  ngOnInit(): void {
    this.fetchAndSearchMovies();
  }
  fetchAndSearchMovies() {
    const searchUrl = `http://localhost:3000/data?search=${this.searchInput}`;
    this.http.get<ItemData[]>(searchUrl).subscribe((movies) => {
      this.data = movies;
    });
  }
  getButtonLabel(item: string): string {
    let check = this.state
      .getValue()
      .app.listMovies?.find((movie: ItemData) => movie.imdbID === item);

    if (check) {
      return 'Remove';
    } else return 'Add';
  }
  addMovieToWatchList(newValue: ItemData) {
    this.store.dispatch(addMovieToWatchList({ newValue }));
  }
}
