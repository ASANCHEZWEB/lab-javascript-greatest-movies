/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
let orderByYear = arr => {
  let arrayDate = [...arr];
  arrayDate.sort(function(a, b) {
    if (a.year - b.year != 0) {
      return a.year - b.year;
    } else {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    }
  });
  return arrayDate;
};
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arrayMovies) {
  let pelisSteven = arrayMovies.filter(function(element) {
    if (element.director == "Steven Spielberg") {
      return element;
    }
  });
  let onlyDrama = pelisSteven.filter(function(element) {
    let elemento = "";
    element.genre.forEach(function(genre) {
      if (genre == "Drama") {
        return (elemento = genre);
      }
    });
    return elemento;
  });
  if (pelisSteven.length == 0) {
    return 0;
  }
  return onlyDrama.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let arr = movies.map(elem => elem.title);
  if (arr.length > 20) {
    arr.slice(0, 20);
  }
  arr.sort();
  return arr.slice(0, 20);
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  const totalRates = movies.reduce((sum,elem) => {
    
    if(elem == undefined || elem == ""){
      return sum += 0;
    }else{
      return sum += elem.rate;
    }
    
    
  });

 console.log(totalRates)
}
// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
