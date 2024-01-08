const numberOfFilms = +prompt("How many films have you already seen?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("What last movie did you see?", ""),
    b = prompt("How would you rate it?", ""),
    c = prompt("What last movie did you see?", ""),
    d = prompt("How would you rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



