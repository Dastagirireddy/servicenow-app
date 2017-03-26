'use strict';
let express = require('express');
let Router = express.Router;
let movies = require('./movies/controllers/index');

class Api {
    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('/movies', movies.getMovies.bind(express));
        this.router.put('/movies', movies.updateMovies.bind(express));
    }
}

module.exports = new Api().router;
