
export let moviesList = function (dataMovie, director){
    return dataMovie.filter(movies=>movies.director===director).map(film=>film.title);
}
