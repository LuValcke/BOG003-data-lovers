import data from "./data/ghibli/ghibli.js";

import { dataSortedAZ, dataSortedZA, moviesList } from "./data.js";
import { dataSortedNew } from "./data.js";
import { dataSortedOld } from "./data.js";

//Este es el evento que sucede cuando se aprieta el botón Directors
document.getElementById("buttonDirectors").addEventListener("click", () => {
  document.getElementById("homeTxt").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("wallImg").style.display = "none";
  document.getElementById("movieDir").style.display = "block";
});

//Este es el evento que sucede cuando se aprieta el botón Films
document.getElementById("buttonFilms").addEventListener("click", () => {
  document.getElementById("homeTxt").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("wallImg").style.display = "none";
  document.getElementById("movieDir").style.display = "none";
  document.getElementById("filmSort").style.display = "block";
  showDate(data.films);
 
});
//Este es el evento que sucede cuando se aprieta el botón Characters
document.getElementById("buttonCharacters").addEventListener("click", () => {
    document.getElementById("homeTxt").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("wallImg").style.display = "none";
    document.getElementById("movieDir").style.display = "none";
    document.getElementById("filmSort").style.display = "none";
    document.getElementById("characters").style.display = "block";
    recorrerArray(data.films);
   
  });
//Estos son los eventos para volver al home
document.getElementById("homeDir").addEventListener("click", () => {
  location.reload();
});
document.getElementById("homeFilms").addEventListener("click", () => {
  location.reload();
});
document.getElementById("homeCharacters").addEventListener("click", () => {
    location.reload();
  });
//Estas funciones suceden cuando se clickea el nombre de algún director en la página de directores, al darle click se muestran las películas de ese director, al volver a clickear se ocultan
document.getElementById("hayao").addEventListener("click", () => {
  addLi("Hayao Miyazaki", "#hayaoFilms");
  document.getElementById("hayaoFilms").classList.toggle("newSpanStyle");
});
document.getElementById("isao").addEventListener("click", () => {
  addLi("Isao Takahata", "#isaoFilms");
  document.getElementById("isaoFilms").classList.toggle("newSpanStyle");
});
document.getElementById("yoshi").addEventListener("click", () => {
  addLi("Yoshifumi Kondō", "#yoshiFilms");
  document.getElementById("yoshiFilms").classList.toggle("newSpanStyle");
});
document.getElementById("yuki").addEventListener("click", () => {
  addLi("Hiroyuki Morita", "#yukiFilms");
  document.getElementById("yukiFilms").classList.toggle("newSpanStyle");
});
document.getElementById("goro").addEventListener("click", () => {
  addLi("Gorō Miyazaki", "#goroFilms");
  document.getElementById("goroFilms").classList.toggle("newSpanStyle");
});
document.getElementById("masa").addEventListener("click", () => {
  addLi("Hiromasa Yonebayashi", "#masaFilms");
  document.getElementById("masaFilms").classList.toggle("newSpanStyle");
});
//Este evento sucede cuando se selecciona alguna opción para sort
document.querySelector("#filmSelect").addEventListener("change", function () {
  document.getElementById("filmsDate").innerHTML = "";
  if (this.value == "old") {
    showDate(dataSortedOld(data.films));
  } else if (this.value == "new") {
    showDate(dataSortedNew(data.films));
  } else if (this.value == "az") {
    showDate(dataSortedAZ(data.films));
  } else {
    showDate(dataSortedZA(data.films));
  }
});

//Función para convertir en lista el string de los nombres de directores
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
//Función para crear los contenedores de las películas, su poster, título y año
function showDate(data) {
  data.forEach((e) => {
    const filmName = document.createElement("div");
    const filmImg = document.createElement("img");
    const filmTitle = document.createElement("h3");
    const filmDate = document.createElement("h4");
    filmTitle.textContent = e.title;
    filmDate.textContent = e.release_date;
    filmImg.src = e.poster;
    filmName.setAttribute("class", "filmPlace");
    filmName.appendChild(filmImg).setAttribute("class", "imgChar");
    filmName.appendChild(filmTitle);
    filmName.appendChild(filmDate);
    document.getElementById("filmsDate").appendChild(filmName);
  });
}
  
  function showCharacters(data) {
    var  personajes = []
    data.forEach((e) =>{
        const characterMovie = document.createElement("div");
        const characterImg = document.createElement("img");
        const characterName = document.createElement("h3");
        const characterGend = document.createElement("h4");
        characterImg.src = e.img;
        characterName.textContent = e.name;
        characterGend.textContent = e.gender;
        characterMovie.setAttribute("class", "characterPlace");
        characterMovie.appendChild(characterImg);
        characterMovie.appendChild(characterName);
        characterMovie.appendChild(characterGend);
        document.getElementById("filmsCharacters").appendChild(characterMovie);
        personajes = personajes + [e.gender] + ", "
        })
        showGenders(personajes)
        //console.log(showGenders(personajes)) 
} 


function recorrerArray(dataFilms) {
    let contador = 0;
    for (let i = 0; i < dataFilms.length; i++) {
        showCharacters(dataFilms[i].people)
        contador = contador + dataFilms[i].people.length 
    } //console.log(contador)
}

export function showGenders(personajes){
    let fem = [];
    let male = [];
    let other = [];
    for (let i = 0; i < personajes.length; i++) {
        if(i === "female"){
            fem = fem +1;}
        else if(i === "male"){
            male = male + 1;}
        else{
            other = other +1;}
        }
        console.log(fem)
        } 

       


/*  function showCharacters(data) {
    for(let i in data) {
        const characterMovie = document.createElement("div");
        const characterImg = document.createElement("img");
        const characterName = document.createElement("h3");
        const characterGend = document.createElement("h4");
        characterImg.src = data[i]["img"];
        characterName.textContent = data[i]["name"];
        characterGend.textContent = data[i]["gender"];
        characterMovie.setAttribute("class", "characterPlace");
        characterMovie.appendChild(characterImg);
        characterMovie.appendChild(characterName);
        characterMovie.appendChild(characterGend);
        document.getElementById("filmsCharacters").appendChild(characterMovie);
        console.log(data[i]["name"]);
    }
} */ 
//console.log(data.films[0]["people"][0]["name"]);
