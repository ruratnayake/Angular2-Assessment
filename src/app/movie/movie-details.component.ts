import { MovieService } from './movie.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'sm-movie',
    moduleId: module.id,
    templateUrl: 'movie-details.component.html',
    styleUrls: ['movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
    movie: any = null;
    movieId: number;
    imageHeight: number = 250;

    constructor(private _route: ActivatedRoute, private _router: Router, private _movieSvc : MovieService) {
    }

    ngOnInit(): void {
        this._route.params.subscribe(params => {
            this.movieId = +params['id'];   
            this.movie = this._movieSvc.getMovie(this.movieId.toString());
            this.movieId = this.movie.Id;  
            console.log(this.movie);
        });
    }
}