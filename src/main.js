import data from './data/ghibli/ghibli.js';
import {miyazaki} from './data.js';
import {takahaka} from './data.js';
import {kondo} from './data.js';
import {morita} from './data.js';
import {goro} from './data.js';
import {yonebayashi} from './data.js';


//Este es el evento que sucede cuando se aprieta el botón Directors
document.getElementById('buttonDirectors').addEventListener('click',() => {
    document.getElementById('homeTxt').style.display='none';
    document.getElementById('home').style.display='none';
    document.getElementById('wallImg').style.display='none';
    document.getElementById('movieDir').style.display='block';
})

//Estas funciones suceden cuando se clickea el nombre de algún director en la página de directores, al darle click se muestran las películas de ese director, al volver a clickear se ocultan
document.getElementById('hayao').addEventListener('click',() => {
    document.getElementById('hayaoFilms').innerHTML= miyazaki;
    document.getElementById('hayao').addEventListener('click',() =>{
        document.getElementById('hayaoFilms').style.display='none';
    })
})
document.getElementById('isao').addEventListener('click',() => {
    //document.getElementsByClassName('directorSpan').style.display='none';
    document.getElementById('isaoFilms').innerHTML= takahaka;
    document.getElementById('isao').addEventListener('click',() =>{
        document.getElementById('isaoFilms').style.display='none';
    })
})
document.getElementById('yoshi').addEventListener('click',() => {
    //document.getElementsByClassName('directorSpan').style.display='none';
    document.getElementById('yoshiFilms').innerHTML= kondo;
    document.getElementById('yoshi').addEventListener('click',() =>{
        document.getElementById('yoshiFilms').style.display='none';
    })
})
document.getElementById('yuki').addEventListener('click',() => {
    //document.getElementsByClassName('directorSpan').style.display='none';
    document.getElementById('yukiFilms').innerHTML= morita;
    document.getElementById('yuki').addEventListener('click',() =>{
        document.getElementById('yukiFilms').style.display='none';
    })
})
document.getElementById('goro').addEventListener('click',() => {
    //document.getElementsByClassName('directorSpan').style.display='none';
    document.getElementById('goroFilms').innerHTML= goro;
    document.getElementById('goro').addEventListener('click',() =>{
        document.getElementById('goroFilms').style.display='none';
    })
})
document.getElementById('masa').addEventListener('click',() => {
    //document.getElementsByClassName('directorSpan').style.display='none';
    document.getElementById('masaFilms').innerHTML= yonebayashi;
    document.getElementById('masa').addEventListener('click',() =>{
        document.getElementById('masaFilms').style.display='none' ;
    })
})
    



/* let movie = movieFilter(dataMovie, "Hayao Miyazaki").map(film => film.title);
console.log(movie) */
//let movieTitles=[];
//for(let i=0; i < movie.length; i++){
    //movieTitles[i]=movie[i].title
//}
//console.table(movieTitles)




