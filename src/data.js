// Función que realiza el filtro de las películas por su director.
export let moviesList = function (dataMovie, director) {
  return dataMovie
    .filter((movies) => movies.director === director)
    .map((film) => film.title);
};
 
 
//Estas funciones ordenan las películas según su fecha y nombre de forma ascendente y descendente.
export let dataSortedOld = function (dataMovie) {
  return dataMovie.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));
};

export let dataSortedNew = function (dataMovie) {
  return dataMovie.sort((a, b) => (b.release_date > a.release_date ? 1 : -1));
};
export let dataSortedAZ = function (dataMovie) {
  return dataMovie.sort((a, b) => (a.title > b.title ? 1 : -1));
};

export let dataSortedZA = function (dataMovie) {
  return dataMovie.sort((a, b) => (b.title > a.title ? 1 : -1));
};

//Esta función realiza el cálculo de porcentajes de los géneros de los personajes.
export let genderPer = function (fem, male, other) {
  let total = fem + male + other;
  let females = (fem * 100) / total;
  let males = (male * 100) / total;
  let others = (other * 100) / total;
  let values = {
    fem: females,
    male: males,
    other: others,
    total: total
  }
  return values
};
