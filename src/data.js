
export let moviesList = function (dataMovie, director){
    return dataMovie.filter(movies=>movies.director===director).map(film=>film.title);
}

export let dataSortedOld = function(dataMovie){
    return dataMovie.sort((a, b) => (a.release_date > b.release_date) ? 1 : -1);
}

export let dataSortedNew = function(dataMovie){
    return dataMovie.sort((a, b) => (b.release_date > a.release_date) ? 1 : -1);
}
export let dataSortedAZ = function(dataMovie){
    return dataMovie.sort((a, b) => (a.title > b.title) ? 1 : -1);
}

export let dataSortedZA = function(dataMovie){
    return dataMovie.sort((a, b) => (b.title > a.title) ? 1 : -1);
}
