// STEP 1
const favoriteMovies = ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back"];
console.log("Second movie:", favoriteMovies[1]);

// STEP 2
let movies = new Array(5);
movies[0] = "The Phantom Menace";
movies[1] = "Attack of the Clones";
movies[2] = "Revenge of the Sith";
movies[3] = "A New Hope";
movies[4] = "The Empire Strikes Back";
console.log("First movie:", movies[0]);

// STEP 3
movies.splice(2, 0, "New Movie");
console.log("Array length:", movies.length);

// STEP 4
let moviesLiteral = ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back"];
delete moviesLiteral[0];
console.log("Array after deletion:", moviesLiteral);

// STEP 5
let moviesSeven = ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens"];
console.log("Using for/in loop:");
for (let index in moviesSeven) {
    console.log(moviesSeven[index]);
}

// STEP 6
console.log("Using for/of loop:");
for (let movie of moviesSeven) {
    console.log(movie);
}

// STEP 7
console.log("Sorted view:");
for (let movie of moviesSeven.sort()) {
    console.log(movie);
}

// STEP 8
let leastFavMovies = ["The Fast and the Furious", "2 Fast 2 Furious", "The Fast and the Furious: Tokyo Drift"];
console.log("Movies I like:");
for (let movie of moviesSeven) {
    console.log(movie);
}
console.log("\nMovies I regret watching:");
for (let movie of leastFavMovies) {
    console.log(movie);
}

// STEP 9
let mergedArray = moviesSeven.concat(leastFavMovies);
console.log("Merged array in reverse sorted:");
console.log(mergedArray.sort().reverse());

// STEP 10
console.log("Last item in the array:", mergedArray.slice(-1)[0]);

// STEP 11
console.log("First item in the array:", mergedArray.slice(0, 1)[0]);

// STEP 12
let indicesOfLeastFav = [];
for (let i in leastFavMovies) {
    let index = mergedArray.indexOf(leastFavMovies[i]);
    if (index !== -1) {
        indicesOfLeastFav.push(index);
    }
}
console.log("Indices of least favorite movies:", indicesOfLeastFav);
for (let index of indicesOfLeastFav) {
    mergedArray[index] = "New Movie";
}

// STEP 13
let multiDimensionalMovies = [["The Phantom Menace", 1], ["Attack of the Clones", 2], ["Revenge of the Sith", 3], ["A New Hope", 4], ["The Empire Strikes Back", 5]];
let movieNames = multiDimensionalMovies.map(movie => movie[0]);
console.log("Movie names:", movieNames);

// STEP 14
let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
function showEmployee(arr) {
    console.log("Employees:");
    for (let employee of arr) {
        console.log(employee);
    }
}
showEmployee(employees);

// STEP 15
function filterValues(arr) {
    return arr.filter(value => value !== false && value !== null && value !== 0 && value !== "");
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

// STEP 16
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// STEP 17
function getLargestNumber(arr) {
    return Math.max(...arr.filter(num => typeof num === 'number'));
}