import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { appReducer, initialState } from '../ngrx/movies.reducer';
import { WatchListComponent } from './watch-list/watch-list.component';
@NgModule({
  declarations: [AppComponent, ListMoviesComponent, WatchListComponent],
  imports: [
    NzListModule,
    HttpClientModule,
    FormsModule,
    NzIconModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ app: appReducer }),
    StoreModule.forRoot(
      { app: appReducer },
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    StoreModule.forFeature('app', appReducer),
  ],
  exports: [RouterModule],
})
export class AppModule {}
