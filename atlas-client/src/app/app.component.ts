import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WatchListComponent } from './watch-list/watch-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ListMoviesComponent,
    RouterOutlet,
    NavbarComponent,
    WatchListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'atlas';
  list = ListMoviesComponent;
  navbar = NavbarComponent;
}
