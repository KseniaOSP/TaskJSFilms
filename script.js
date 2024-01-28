'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("How many films have you already seen?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you already seen?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {

            const a = prompt("What last movie did you see?", ""),
                  b = +prompt("How would you rate it?", "");
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }   
        }    
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('You have seen a few movies.');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are a classic viewer.');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are a movie fan.');
        } else {
            console.log('Error');
        }  
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            const a = prompt(`Your favourite genre at number ${i+1} is ?`, ""); 
               
        if (a !== null || a !== '') {
            personalMovieDB.genres[i] = a;
        } else {
            i--;
        }
    }
        personalMovieDB.genres.forEach((item, i) => {
                console.log(`The favourite genre #${i+1} is ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};





