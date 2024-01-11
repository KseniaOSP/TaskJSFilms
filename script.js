const numberOfFilms = +prompt("How many films have you already seen?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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
    
console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('You have seen a few movies.');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are a classic viewer.');
} else if (personalMovieDB.count >= 30) {
    console.log('You are a movie fan.');
} else {
    console.log('Error');
}







