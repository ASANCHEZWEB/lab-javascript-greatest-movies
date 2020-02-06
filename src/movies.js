/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  // hago una copia del array que me entra como parametro en la funcion.
  let newArray = [...arr];
  //ordeno con .sort
  const moviesOrdered = newArray.sort(function(a, b) {
    if (a.year > b.year) {
      // si el año  de a es mayor que el año de b , entonces devuelve uno (lo cambiamos de posicion)
      return 1;
    } else if (a.year < b.year) {
      // si el año  de a es menor que el año de b , entonces devuelve -uno (es decir no se cambia)
      return -1;
    } else if (a.year == b.year && a.title > b.title) {
      // si los años de a y b son iguales y el titulo de a es menor en unicode entonces lo cambiamos(return 1)
      return 1;
    } else if (a.year == b.year && a.title < b.title) {
      // si los años son iguales y el titulo de a es menor , devolvemos -1 para que se cambie
      return -1;
    }
  });
  return moviesOrdered;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  //creo una copia del array
  let newArray = [...arr];
  // filtro por las peliculas de Steven Spielberg
  let spielbergMovies = newArray.filter(
    movie => movie.director === "Steven Spielberg"
  );
  //ina vez filtradas las pelis de ese director , ahora filtramos las que sean dramaticas
  let spilbergDramaMovies = spielbergMovies.filter(movie =>
    movie.genre.includes("Drama")
  );
  //devolvemos la cantidad total de peliculas dramaticas de ese director
  return spilbergDramaMovies.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  //creo una copia del array que entra como parametro
  const newArrayMovies = [...arr];
  //ahora lo ordeno por titulo con .sort, y una vez orenado , hago un  map del array resultante con .map
  //y le indico que solo elementos del 0-20 con el slice
  let ordenarTop20 = newArrayMovies
    .sort(function(a, b) {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
      return 0;
    })
    .map(movies => movies.title)
    .slice(0, 20);

  return ordenarTop20;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  //new array
  const newArray = [...arr];
  // si la cantidad de elementos del array no es cero , entonces ejecutamos.....
  if (newArray.length != 0) {
    //array con todos los "rate" , creamos un array con los elementos que contengan rate , y filtramos por los que tengan  mas de 0.
    const moviesRate = newArray
      .map(function(movie) {
        if (typeof movie.rate === "number") {
          return movie.rate;
        } else {
          return 0;
        }
      })
      .filter(function(movie) {
        return movie >= 0;
      });

    //sumar todas las tasas del array de elementos con rate de "moviesRate"
    const sumOfAllRates = moviesRate.reduce(function(acc, rate) {
      return acc + rate;
    }, 0);
    //calcular la media
    let avgRates = sumOfAllRates / moviesRate.length;
    //redondear 2 decimales
    return Math.round(avgRates * 100) / 100;
  } else {
    return 0;
  }
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  //filtro por las peliculas dramaticas con .filter
  let pelisDrama = movies.filter(value => value.genre.includes("Drama"));
  //ahora calculo la suma total de los rate
  let media = pelisDrama.reduce(
    (accumulator, value) => accumulator + value.rate,
    0
  );
  //guardo en variable el total de pelis dramaticAS
  let lengthDrama = pelisDrama.length;
  //si no hay pelis dramaticas devolvemos 0
  if (lengthDrama === 0) {
    return 0;
  }
  //en caso contrario , devolvemos la media con 2 decimales
  return Math.round((media / lengthDrama) * 100) / 100;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    const duration = movie.duration.split(" ");
    let mins = 0;
    for (let time of duration) {
      if (time.includes("h")) {
        mins += parseInt(time) * 60;
      } else {
        mins += parseInt(time);
      }
    }
    return {...movie,duration: mins};
  });
}

