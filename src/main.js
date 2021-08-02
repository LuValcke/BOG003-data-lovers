import data from "./data/ghibli/ghibli.js";


import { dataSortedAZ, dataSortedZA, moviesList, genderPer } from "./data.js";
import { dataSortedNew } from "./data.js";
import { dataSortedOld } from "./data.js";

//Esta variable guarda el listado de los generos de los personajes se llena por push desde la linea 151
let generospersonajes = new Array();

//Este es el evento que sucede cuando se aprieta el botón Directors
document.getElementById("buttonDirectors").addEventListener("click", () => {
  document.getElementById("homeTxt").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("wallImg").style.display = "none";
  document.getElementById("movieDir").style.display = "block";
});

//Este es el evento que sucede cuando se aprieta el botón Films, la función showDate se crea en la linea 112
document.getElementById("buttonFilms").addEventListener("click", () => {
  document.getElementById("homeTxt").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("wallImg").style.display = "none";
  document.getElementById("movieDir").style.display = "none";
  document.getElementById("filmSort").style.display = "block";
  showDate(data.films);
});

//Este es el evento que sucede cuando se aprieta el botón Characters, la función recorrerArray se crea en la linea 131
document.getElementById("buttonCharacters").addEventListener("click", () => {
  document.getElementById("homeTxt").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("wallImg").style.display = "none";
  document.getElementById("movieDir").style.display = "none";
  document.getElementById("filmSort").style.display = "none";
  document.getElementById("characters").style.display = "block";
  recorrerArray(data.films);
});

//Estos son los eventos para volver al home de las 3 páginas
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
//Esta función imprime el cálculo de porcentajes de géneros que realiza la función genderPer de data.js
document.querySelector("#characterSelect").addEventListener("change", function () {
  const objectValue = genderPer(fem, male, other);
  if (this.value == "female") {
    document.getElementById("characterGenders").innerHTML = "There are "+(objectValue.total) + " characters in Studio Ghibli's movies. Around "  + Math.round(objectValue.fem) + "% of them are female characters."
  } else if (this.value == "male") {
    document.getElementById("characterGenders").innerHTML = "There are "+(objectValue.total) + " characters in Studio Ghibli's movies. Around "  + Math.round(objectValue.male) + "% of them are male characters."
  } else  {
    document.getElementById("characterGenders").innerHTML = "There are "+(objectValue.total) + " characters in Studio Ghibli's movies. Around "  + Math.round(objectValue.other) + "% of them are other or unknown genders characters."
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

//Esta función permite recorrer el arreglo de data y acceder a sus personajes y de ellos tomar imágen, nombre y género para poder realizar la función showCharacters (138)
function recorrerArray(dataFilms) {
  for (let i = 0; i < dataFilms.length; i++) {
    showCharacters(dataFilms[i].people);
  }
  showGenders(generospersonajes);
}
//Función para crear los contenedores de los personajes, su imagen, nombre y género se llama en la linea 133
function showCharacters(data) {
  data.forEach((e) => {
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
    generospersonajes.push(e.gender);
  });
}
//Esta función realiza el conteo de cada género utilizando el array inicializado en la linea 9
let fem = 0;
let male = 0;
let other = 0;
function showGenders(generos) {
  generos.forEach(element => {
    if (element === "Female") {
        fem = fem + 1;
      } else if (element === "Male") {
        male = male + 1;
      } else {
        other = other + 1;
    }
  });
} 