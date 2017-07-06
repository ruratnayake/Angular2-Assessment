"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var movie_service_1 = require("./movie.service");
var MovieUpdateComponent = (function () {
    function MovieUpdateComponent(_route, _movieSvc) {
        this._route = _route;
        this._movieSvc = _movieSvc;
        this.imageHeight = 450;
    }
    MovieUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetNewCast();
        this._route.params.subscribe(function (params) {
            if (params['id']) {
                _this.movieId = +params['id'];
                _this.movie = _this._movieSvc.getMovie(_this.movieId.toString());
                _this._movie = Object.assign({}, _this.movie);
            }
            else {
                _this.resetForm();
            }
        });
    };
    MovieUpdateComponent.prototype.addRole = function (newRole) {
        this.movie.Cast.push(newRole);
        this.resetNewCast();
    };
    MovieUpdateComponent.prototype.saveMovie = function () {
        console.log(this.movie);
        this._movieSvc.saveMovie(this.movie);
    };
    MovieUpdateComponent.prototype.resetNewCast = function () {
        this.newCast = { Role: '', Actor: '' };
    };
    MovieUpdateComponent.prototype.removeRole = function (role) {
        console.log(role);
        if (this.movie && this.movie.Cast) {
            for (var i = 0; i < this.movie.Cast.length; i++) {
                if (this.movie.Cast[i] == role) {
                    this.movie.Cast.splice(i, 1);
                    break;
                }
            }
        }
    };
    MovieUpdateComponent.prototype.resetForm = function () {
        this.resetNewCast();
        if (this.movie && this.movie.Id) {
            this.movie = this._movie;
        }
        else {
            this.movie = {
                Id: 0,
                Cover: '', Title: '', Description: '', Director: '',
                ReleaseDate: '', Rating: '', Language: '',
                Cast: []
            };
        }
    };
    return MovieUpdateComponent;
}());
MovieUpdateComponent = __decorate([
    core_1.Component({
        selector: 'sm-movie-edit',
        moduleId: module.id,
        templateUrl: 'movie-new.component.html',
        styleUrls: ['movie-new.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, movie_service_1.MovieService])
], MovieUpdateComponent);
exports.MovieUpdateComponent = MovieUpdateComponent;
//# sourceMappingURL=movie-new.component.js.map