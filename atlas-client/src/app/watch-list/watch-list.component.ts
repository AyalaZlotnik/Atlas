import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { State, Store, StoreModule, select } from '@ngrx/store';
import { AppState } from '../../ngrx/movies.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [CommonModule, StoreModule],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css',
})
export class WatchListComponent {
  constructor(private store: Store<AppState>, private state: State<AppState>) {}
  subscription: Subscription = new Subscription();
  myState: any;

  ngOnInit() {
    this.myState = this.state.getValue().app.listMovies;
  }
}
