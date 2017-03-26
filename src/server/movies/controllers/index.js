'use strict';

let movies = [{
    "$id": "1",
    "title": "Gone Girl",
    "image": "images/movie1.jpg",
    "rating": "3",
    "releaseDate": "2014-02-22"
}, {
    "$id": "2",
    "title": "The Good Life",
    "image": "images/movie2.jpg",
    "rating": "4",
    "releaseDate": "2017-06-24"
}, {
    "$id": "3",
    "title": "The Hero of Color City",
    "image": "images/movie3.jpg",
    "rating": "0",
    "releaseDate": "2014-11-23"
}, {
    "$id": "4",
    "title": "Guardians of the Galaxy",
    "image": "images/movie4.jpg",
    "rating": "5",
    "releaseDate": "2014-07-01"
}, {
    "$id": "5",
    "title": "The Drop",
    "image": "images/movie5.jpg",
    "rating": "0",
    "releaseDate": "2014-12-01"
}, {
    "$id": "6",
    "title": "If I Stay",
    "image": "images/movie6.jpg",
    "rating": "0",
    "releaseDate": "2015-01-01"
}];

class Movie {
    constructor() {}

    getMovies(req, res, next) {

        res.json(movies);
    }

    updateMovies(req, res, next) {

        let body = req.body;
        let index;

        for (let i = 0; i < movies.length; i++) {
            if (movies[i].$id == body.$id) {
                index = i;
                break;
            }
        }

        movies[index] = body;

        res.json(movies);
    }
}

module.exports = new Movie();
