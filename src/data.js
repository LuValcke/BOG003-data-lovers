import data from './data/ghibli/ghibli.js';


const dataMovie = data.films
export let miyazaki = dataMovie.filter(movies=>movies.director==="Hayao Miyazaki").map(film=>[film.title]); /* aquí hay q pensar en como hacer el salto de linea entre los elementos del areglo*/
export let takahaka = dataMovie.filter(movies=>movies.director==="Isao Takahata").map(film=>[film.title]);
export let kondo = dataMovie.filter(movies=>movies.director==="Yoshifumi Kondō").map(film=>[film.title]);
export let morita = dataMovie.filter(movies=>movies.director==="Hiroyuki Morita").map(film=>[film.title]);
export let goro = dataMovie.filter(movies=>movies.director==="Gorō Miyazaki").map(film=>[film.title]);
export let yonebayashi = dataMovie.filter(movies=>movies.director==="Hiromasa Yonebayashi").map(film=>[film.title]);
export let listaDePeliculas = function (director){
    return dataMovie.filter(movies=>movies.director===director).map(film=>film.title);
}
