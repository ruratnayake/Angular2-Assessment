import { MovieService } from './movie/movie.service';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  template: `<div id='container' class="container">
                <div class="page-title">
                  {{appTitle}}
                </div>
                <div class='movies-container nav'>
                  <ul>
                    <li><a [routerLink]="['/home']">Home</a></li>
                    <li><a [routerLink]="['/new-movie']">New Movie</a></li>
                    <li><a [routerLink]="['/about']">About</a></li>
                  </ul>
                </div>
                <router-outlet></router-outlet>
             </div>`,
  providers:[MovieService]
})
export class AppComponent {
  appTitle: string = 'STAR MOVIES';

}
