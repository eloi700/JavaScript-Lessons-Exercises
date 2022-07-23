//ARRAYS
const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];

//FOR LOOP
function newMovies() {
  for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
  }
  return movies;
}

console.log("new movies:", newMovies()[1]);

// FOR EACH
const movies1 = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
movies1.forEach((movie) => {
  console.log(movie);
});

//FOR OF
const movies2 = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
for (const movie of movies2) {
  console.log(movie);
}

//THE MUSKETEERS
const musketeers = ["Athos", "Porthos", "Aramis"];
musketeers.push("D'Artagnan");

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.pop();
musketeers.forEach((musketeer) => {
  console.log(musketeer);
});

musketeers.unshift("D'Artagnan");
for (const musketeer of musketeers) {
  console.log(musketeer);
}

//SUM OF VALUES
const total = [3, 11, 7, 2, 9, 10].reduce(add, 0);
function add(accumulator, a) {
  return accumulator + a;
}
console.log(total);

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
for (let i = 0; i < values.length; i++) {
  sum += values[i];
}
console.log(sum);

// ------------

//FOR IN LOOP - SHOWING THE INDEX
//FOR OF LOOP - SHOWING THE VALUES
const numbers = [3, 11, 7, 2, 9, 10];
let sumOfNumbers = 0;
for (const number of numbers) {
  sumOfNumbers += number;
}
console.log(sumOfNumbers);

sumOfNumbers = 0;
const numbers1 = [3, 11, 7, 2, 9, 10];
numbers1.forEach((number) => {
  sumOfNumbers += number;
});
  console.log(sumOfNumbers);
