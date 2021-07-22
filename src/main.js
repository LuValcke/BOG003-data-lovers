import data from './data/ghibli/ghibli.js';
 
import {moviesList} from './data.js';



//Este es el evento que sucede cuando se aprieta el botón Directors
document.getElementById('buttonDirectors').addEventListener('click',() => {
    document.getElementById('homeTxt').style.display='none';
    document.getElementById('home').style.display='none';
    document.getElementById('wallImg').style.display='none';
    document.getElementById('movieDir').style.display='block';
})

//Estas funciones suceden cuando se clickea el nombre de algún director en la página de directores, al darle click se muestran las películas de ese director, al volver a clickear se ocultan
document.getElementById('hayao').addEventListener('click',() => {
    addLi('Hayao Miyazaki', '#hayaoFilms');
    document.getElementById('hayaoFilms').classList.toggle('newSpanStyle');
})

document.getElementById('isao').addEventListener('click',() => {
    addLi('Isao Takahata', '#isaoFilms');
    document.getElementById('isaoFilms').classList.toggle('newSpanStyle');
})
document.getElementById('yoshi').addEventListener('click',() => {
    addLi('Yoshifumi Kondō', '#yoshiFilms');
    document.getElementById('yoshiFilms').classList.toggle('newSpanStyle');
})
document.getElementById('yuki').addEventListener('click',() => {
    addLi('Hiroyuki Morita', '#yukiFilms');
    document.getElementById('yukiFilms').classList.toggle('newSpanStyle');
})
document.getElementById('goro').addEventListener('click',() => {
    addLi ('Gorō Miyazaki', '#goroFilms');
    document.getElementById('goroFilms').classList.toggle('newSpanStyle');
})
document.getElementById('masa').addEventListener('click',() => {
    addLi ('Hiromasa Yonebayashi', '#masaFilms');
    document.getElementById('masaFilms').classList.toggle('newSpanStyle');
})
    



function addLi(director, site) {
    document.querySelector(site).innerHTML = "";
    var titles;
    for (let i = 0; i < moviesList(data.films, director).length; i++) {
      var li = document.createElement("li");
      titles = moviesList(data.films, director)[i];
      li.appendChild(document.createTextNode(titles));
      document.querySelector(site).appendChild(li);
    }
}

