import data from "./data/ghibli/ghibli.js";


import { dataSortedAZ, dataSortedZA, moviesList, genderPer } from "./data.js";
import { dataSortedNew } from "./data.js";
import { dataSortedOld } from "./data.js";


let generospersonajes = new Array();


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
  //printGend(total)
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

document.querySelector("#characterSelect").addEventListener("change", function () { 
  const {total, femenino, masculino, otros} = genderPer({fem, male, other})
  if (this.value == "female") {
    document.getElementById("characterGenders").innerHTML = "There are "+(total) + " characters in Studio Ghibli's movies. "  + (femenino) + "% are female characters."
  } else if (this.value == "male") {
    document.getElementById("characterGenders").innerHTML = "There are "+(total) + " characters in Studio Ghibli's movies. "  + (masculino) + "% are male characters."
  } else  {
    document.getElementById("characterGenders").innerHTML = "There are "+(total) + " characters in Studio Ghibli's movies. "  + (otros) + "% are other or unknown genders characters."
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


//Función para crear los contenedores de los personajes, su imagen, nombre y género
export let datosGeneros = {}
export function recorrerArray(dataFilms) {
  for (let i = 0; i < dataFilms.length; i++) {
    showCharacters(dataFilms[i].people);
  }

  datosGeneros = showGenders(generospersonajes);
  //console.log(datosGeneros)
}

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
  //printGend(fem, male, other)

} 
 //desestructurar
  //const totales = genderPer({fem, male, other})  en este caso se usa totales. total totales. femenino, etc
/* function printGend(fem, male, other){

  
  if 
  document.getElementById("characterGenders").innerHTML = "There are " + (total) + " characters in the Studio Ghibli's movies."
  console.log("fem", femenino, "male", masculino, otros);
}
 */