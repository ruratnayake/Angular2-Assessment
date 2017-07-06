"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var movie_service_1 = require("./movie/movie.service");
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.appTitle = 'STAR MOVIES';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        moduleId: module.id,
        template: "<div id='container' class=\"container\">\n                <div class=\"page-title\">\n                  {{appTitle}}\n                </div>\n                <div class='movies-container nav'>\n                  <ul>\n                    <li><a [routerLink]=\"['/home']\">Home</a></li>\n                    <li><a [routerLink]=\"['/new-movie']\">New Movie</a></li>\n                    <li><a [routerLink]=\"['/about']\">About</a></li>\n                  </ul>\n                </div>\n                <router-outlet></router-outlet>\n             </div>",
        providers: [movie_service_1.MovieService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map