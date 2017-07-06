import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
    selector: 'sm-movie-edit',
    moduleId: module.id,
    templateUrl: 'movie-new.component.html',
    styleUrls: ['movie-new.component.css']
})

export class MovieUpdateComponent implements OnInit {
    movieId: number;
    movie: any;
    _movie: any;
    imageHeight: number = 450;
    newCast: any;

    constructor(private _route: ActivatedRoute, private _movieSvc: MovieService) {
    }

    ngOnInit(): void {
        this.resetNewCast();

        this._route.params.subscribe(params => {
            if (params['id']) {
                this.movieId = +params['id'];
                this.movie = this._movieSvc.getMovie(this.movieId.toString());
                this._movie = Object.assign({}, this.movie);
            } else {
                this.resetForm();
            }
        });
    }

    addRole(newRole: any): void {
        this.movie.Cast.push(newRole);
        this.resetNewCast();
    }

    saveMovie(): void {
        console.log(this.movie);
        this._movieSvc.saveMovie(this.movie);
    }

    resetNewCast(): void {
        this.newCast = { Role: '', Actor: '' };
    }

    removeRole(role: any): void {
        console.log(role);
        if (this.movie && this.movie.Cast) {
            for (let i = 0; i < this.movie.Cast.length; i++) {
                if (this.movie.Cast[i] == role) {
                    this.movie.Cast.splice(i, 1);
                    break;
                }
            }
        }
    }

    resetForm(): void {
        this.resetNewCast();
        if (this.movie && this.movie.Id) {
            this.movie = this._movie;
        } else {
            this.movie = {
                Id: 0,
                Cover: '', Title: '', Description: '', Director: '',
                ReleaseDate: '', Rating: '', Language: '',
                Cast: []
            }
        }
    }
}