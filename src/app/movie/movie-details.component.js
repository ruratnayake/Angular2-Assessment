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
var movie_service_1 = require("./movie.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MovieDetailsComponent = (function () {
    function MovieDetailsComponent(_route, _router, _movieSvc) {
        this._route = _route;
        this._router = _router;
        this._movieSvc = _movieSvc;
        this.movie = null;
        this.imageHeight = 250;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.movieId = +params['id'];
            _this.movie = _this._movieSvc.getMovie(_this.movieId.toString());
            _this.movieId = _this.movie.Id;
            console.log(_this.movie);
        });
    };
    return MovieDetailsComponent;
}());
MovieDetailsComponent = __decorate([
    core_1.Component({
        selector: 'sm-movie',
        moduleId: module.id,
        templateUrl: 'movie-details.component.html',
        styleUrls: ['movie-details.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, movie_service_1.MovieService])
], MovieDetailsComponent);
exports.MovieDetailsComponent = MovieDetailsComponent;
//# sourceMappingURL=movie-details.component.js.map