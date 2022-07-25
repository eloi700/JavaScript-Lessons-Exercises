// //Array Operations
// //map() Method - takes an array as a parameters & creates a new array with the results of calling a provided function on every element.  Typical use of map() is to replace a loop for array traversal.

// //---------------------------------------
// const numbers = [1, 2, 3, 4, 5];
// const doubles = numbers.map((x) => x * 2);
// console.log(numbers); //[1, 2, 3, 4, 5] no changes
// console.log(doubles); // [2, 4, 6, 8, 10]

// //Get the movie titles
// const titles = () => {
//   const titles = [];
//   for (const movie of movieList) {
//     titles.push(movie.title);
//   }
//   return titles;
// };

// //map() method of the above (getting movie titles)
// const titles = (movies) => {
//   // Return a new array containing only movie titles
//   return movies.map((movie) => movie.title);
// };

// //-----------------------------------------------------
// //filter() Method
// const numbers = [1, 5, 10, 15];
// // Keep only the number greater than or equal to 10
// const bigOnes = numbers.filter((x) => x >= 10);
// console.log(numbers); // [1, 5, 10, 15] (no change)
// console.log(bigOnes); // [10, 15]

// // Get movies by Christopher Nolan
// const nolanMovies = (movies) => {
//   /* Previous code
//     const nolanMovies = [];
//     for (const movie of movies) {
//     if (movie.director === "Christopher Nolan") {
//     nolanMovies.push(movie);
//     }
//     }
//     return nolanMovies;
//     */
//   // Return a new array containing only movies by Christopher Nolan
//   return movies.filter((movie) => movie.director === "Christopher Nolan");
// };

// //------------------------------
// //map() and filter()
// // Get titles of movies with an IMDB rating greater or equal to 7.5
// const bestTitles = (movies) => {
//   /* Previous code
//     const bestTitles = [];
//     for (const movie of movies) {
//     if (movie.imdbRating >= 7.5) {
//     bestTitles.push(movie.title);
//     }
//     }
//     return bestTitles;
//     */
//   // Filter movies by IMDB rating, then creates a movie titles array
//   return movies
//     .filter((movie) => movie.imdbRating >= 7.5)
//     .map((movie) => movie.title);
// };

// //-------------------------------------------
// //reduce() Method
// //The reduce() method applies a provided function to each array element in order to reduce it to one value. This method is typically used to perform calculations on an array.

// const numbers = [1, 5, 10, 15];
// // Compute the sum of array elements
// const sum = numbers.reduce((acc, value) => acc + value, 0);
// console.log(numbers); // [1, 5, 10, 15] (no change)
// console.log(sum); // 31
// //The first one is the function associated to reduce() and called for each array element. It takes two parameters: the first is an accumulator which contains the accumulated value previously returned by the last invocation of the function. The other function parameter is the array element.
// //The second one is the initial value of the accumulator (often 0)

// // Compute average rating of a movie list
// const averageRating = (movies) => {
//   /* Previous code
//     let ratingSum = 0;
//     for (const movie of movies) {
//     ratingSum += movie.imdbRating;
//     }
//     return ratingSum / movies.length;
//     */
//   // Compute the sum of all movie IMDB ratings
//   const ratingSum = movies.reduce((acc, movie) => acc + movie.imdbRating, 0);
//   return ratingSum / movies.length;
// };

// //Alternative
// // Compute the sum of all movie IMDB ratings
// const ratingSum = movies
//   .map((movie) => movie.imdbRating)
//   .reduce((acc, value) => acc + value, 0);

// //HIGHER-ORDER FUNCTIONS
// const titles = movies => movies.map(movie => movie.title);
// const byNolan = movie => movie.director === "Christopher Nolan";
// const filter = (movies, func) => movies.filter(func);
// const goodRating = movie => movie.imdbRating >= 7.5;

// const ratings = movies => movies.map(movie => movie.imdbRating);
// const average = array => array.reduce((sum, value) => sum + value, 0) / array.length;
// console.log(titles(movieList))

// const nolanMovieList = filter(movieList, byNolan);
// console.log(nolanMovieList.length);
// console.log(titles(filter(movieList, goodRating)));
// console.log(average(ratings(nolanMovieList)));

//------------------------------
const movieList = [
  {
    title: "Batman",
    year: 1989,
    director: "Tim Burton",
    imdbRating: 7.6,
  },
  {
    title: "Batman Returns",
    year: 1992,
    director: "Tim Burton",
    imdbRating: 7.0,
  },
  {
    title: "Batman Forever",
    year: 1995,
    director: "Joel Schumacher",
    imdbRating: 5.4,
  },
  {
    title: "Batman & Robin",
    year: 1997,
    director: "Joel Schumacher",
    imdbRating: 3.7,
  },
  {
    title: "Batman Begins",
    year: 2005,
    director: "Christopher Nolan",
    imdbRating: 8.3,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    imdbRating: 9.0,
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    director: "Christopher Nolan",
    imdbRating: 8.5,
  },
];

// const moviesBefore2000 = (movieList) => {
//   return movieList
//     .filter((movie) => movie.year < 2000)
//     .map((movie) => movie.title);
// };
// console.log(moviesBefore2000(movieList));

const moviesBefore20001 = movieList
  .filter((movie) => movie.year < 2000)
  .map((movie) => movie.title);
console.log(moviesBefore20001);

const movieDirectedByChris = movieList.filter(movie => movie.director === "Christopher Nolan").map(movie => movie.title);
console.log(movieDirectedByChris);

const sortedMoviesByYear = movieList.sort((a,b) => a - b);
console.log(sortedMoviesByYear);

const aveRating = movieList.reduce((total, rating) => total + rating.imdbRating,0)/movieList.length;
console.log(aveRating);