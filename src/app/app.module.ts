import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/movie-list.component';
import { AboutComponent } from './about/about.component';
import { MovieDetailsComponent } from './movie/movie-details.component';
import { MovieUpdateComponent } from './movie/movie-new.component'

@NgModule({
  imports: [BrowserModule,FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: MovieListComponent },
      { path: 'new-movie', component: MovieUpdateComponent },
      { path: 'update-movie/:id', component: MovieUpdateComponent },
      { path: 'movie-details/:id' , component: MovieDetailsComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }/*,
      { path: '**', redirectTo: 'home', pathMatch: 'full' }*/
    ])
  ],
  declarations: [AppComponent, MovieListComponent, MovieDetailsComponent,MovieUpdateComponent, AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
