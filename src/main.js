import data from './data/ghibli/ghibli.js';
import {movieFilter} from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// // import data from './data/rickandmorty/rickandmorty.js';

document.getElementById('buttonFilms').addEventListener('click',() => {
    document.getElementById('homeTxt').style.display='none';
    document.getElementById('home').style.display='none';
    document.getElementById('wallImg').style.display='none';
    document.getElementById('movieDir').style.display='block';
})

const miyazaki = [data.films.filter( directors => (directors.director === "Hayao Miyazaki"))];

console.log(miyazaki);

