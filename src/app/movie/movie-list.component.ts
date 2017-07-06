import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service'

@Component({
    selector: 'sm-list',
    moduleId: module.id,
    templateUrl: 'movie-list.component.html',
    styleUrls: ['movie-list.component.css']
})

export class MovieListComponent implements OnInit {
    imageWidth: number = 150;
    movies: any[];

    constructor(private _movieSvc: MovieService) {

    }

    ngOnInit(): void {
        this.movies = this._movieSvc.getMovies();
        console.log('Movie Count:' , this.movies.length);
    }
}