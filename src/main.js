import { orderData, filterData, maxHeight, minHeight } from "./data.js";
import data from "./data/pokemon/pokemon.js";

let allData = data.pokemon;

const showData = (poke) => {
  //Funcion que recorre la data y la muestra de manera organizada
  poke.forEach((e) => {
    //El forech tiene un parametro (e) que sera el que representa a cada elemento de la data
    let backgroundCard = document.createElement("div");
    backgroundCard.setAttribute("id", "boxcard"); //boxcard es el div que contiene la tarjeta cardcontainer y la data principal de los pokemon
    let pokeFont = document.createElement("img");
    pokeFont.src = "img/fondodepokemon.png";
    pokeFont.setAttribute("class", "cardcontainer"); //cardcontainer contiene la imagen del fondo de las cartas
    backgroundCard.appendChild(pokeFont);
    document.getElementById("cards").appendChild(backgroundCard); //cards es un div que ocupa toda la pantalla donde se encuentra todo

    let numText = document.createElement("h2");
    numText.innerText = "N° " + e.num;
    numText.setAttribute("id", "pokenum"); // poke num es el h2 que contiene el numero de cada pokemon
    backgroundCard.appendChild(numText);

    let imgPoke = document.createElement("img");
    imgPoke.src = e.img;
    imgPoke.setAttribute("id", "pokeimg"); // pokeimg es la img que contiene la imagen de cada pokemon
    backgroundCard.appendChild(imgPoke);

    let nameTextBtn = document.createElement("button");
    nameTextBtn.innerText =
      e.name.slice(0, 1).toUpperCase() + e.name.slice(1, e.name.length); // Convertimos la primera letra del nombre en mayuscula
    nameTextBtn.setAttribute("id", "btn-pokename"); // btn-pokename es el button que contiene el nombre de la data
    backgroundCard.appendChild(nameTextBtn);

    nameTextBtn.addEventListener("click", () => {
      // Se crea un evento click para btn-pokename que dara paso a la modal
      let modal = document.getElementById("modal"); // modal es el div que ocupa toda la pantalla con opacidad
      let modalContent = document.getElementById("modal-content"); // modal-content es el div con tranpárencia que contiene el resto de la data
      modal.innerHTML = ""; // limpiamos a modal para que no se repita cuando se vuelva a abrir
      modalContent.innerHTML = ""; // limpiamos a modalContent para que no se repita cuando se vuelva a abrir
      let modalClose = document.createElement("span"); //Creamos un span que contiene la X para cerrar
      modalClose.setAttribute("id", "close");
      let modalTextClose = document.createTextNode("X"); // Se crea un elemento tipo texto y asigna a el span X
      modalClose.appendChild(modalTextClose);
      modalContent.appendChild(modalClose);

      let modalBackground = document.createElement("div"); //Se crea div que es el fondo de color de la modal
      modalBackground.setAttribute("id", "modal-background");
      modal.appendChild(modalBackground); //fondo de color de la modal se asigna a modal que ocupa toda la pantalla con opacidad
      modalBackground.appendChild(modalContent); //la modal con transparencia que es modal-content y contiene el resto de la data es asignada a modal-background

      modalClose.addEventListener("click", () => {
        // Se crea un evento click para modalClose que cierra la modal
        modal.style.display = "none";
      });
      modal.style.display = "block"; //Se muestra la modal depues de cerrar

      let numTextModal = document.createElement("h2");
      numTextModal.innerText = "N° " + e.num;
      numTextModal.setAttribute("id", "pokenum-modal"); // pokenum-modal es el h2 que contiene el numero de los pokemon en la modal
      modalContent.appendChild(numTextModal);

      let nameTextModal = document.createElement("h2");
      nameTextModal.innerText =
        e.name.slice(0, 1).toUpperCase() + e.name.slice(1, e.name.length);
      nameTextModal.setAttribute("id", "pokename-modal"); // pokename-modal es el h2 que contiene el nombre de los pokemon en la modal
      modalContent.appendChild(nameTextModal);

      let imgPokeModal = document.createElement("img");
      imgPokeModal.src = e.img;
      imgPokeModal.setAttribute("id", "pokeimg-modal"); // pokeimg-modal es la img que contiene la imagen de los pokemon en la modal
      modalContent.appendChild(imgPokeModal);

      e.type.forEach((element) => {
        // se crea un foreach para recorre la data y traer los tipo de manera individual
        let typeModal = document.createElement("h2");
        typeModal.innerText =
          element.slice(0, 1).toUpperCase() + element.slice(1, element.length);
        typeModal.setAttribute("id", "type-modal"); // type-modal es la h2 que contiene cada uno de los typos de los pokemon en la modal
        modalContent.appendChild(typeModal);
      });

      let lineModal = document.createElement("div"); // se crea linea decorativa que separa los datos en la modal
      lineModal.setAttribute("id", "line-modal");
      modalContent.appendChild(lineModal);

      let heightModal = document.createElement("h2");
      heightModal.innerText = "Height: " + e.size.height;
      heightModal.setAttribute("id", "height-modal"); // height-modal es el h2 que contiene la altura de los pokemon en la modal
      modalContent.appendChild(heightModal);

      let weightModal = document.createElement("h2");
      weightModal.innerText = "Weight: " + e.size.weight;
      weightModal.setAttribute("id", "weight-modal"); // weight-modal es el h2 que contiene el peso de los pokemon en la modal
      modalContent.appendChild(weightModal);

      let textResistant = document.createElement("h2");
      textResistant.setAttribute("id", "text-resistant"); // text-resistant es el h2 que contiene el titulo RESISTANT en la modal
      textResistant.innerText = "RESISTANT";
      modalContent.appendChild(textResistant);

      e.resistant.forEach((element) => {
        let resistantModal = document.createElement("h2");
        resistantModal.innerText =
          element.slice(0, 1).toUpperCase() + element.slice(1, element.length);
        resistantModal.setAttribute("id", "resistant-modal"); // resistant-modal es el h2 que contiene la resistencia de los pokemon en la modal
        modalContent.appendChild(resistantModal);
      });
    });
  });
};

document.getElementById("btn-home").addEventListener("click", () => {
  // evento click para boton home
  document.getElementById("sectionwelcome").style.display = "flex";
  document.getElementById("screenwelcome").style.display = "block";
  document.getElementById("screenpokedex").style.display = "none";
  document.getElementById("screenchart").style.display = "none";
});

document.getElementById("btn-pokedex").addEventListener("click", () => {
  // evento click para boton pokedex
  document.getElementById("cards").innerHTML = " ";
  document.getElementById("sectionwelcome").style.display = "none";
  document.getElementById("screenwelcome").style.display = "none";
  document.getElementById("screenpokedex").style.background = "#F9F8E8";
  document.getElementById("screenpokedex").style.display = "block";
  document.getElementById("screenchart").style.display = "none";
  orderData(allData, "order-default");
  showData(allData);
});

document.getElementById("btn-chart").addEventListener("click", () => {
  // evento click para boton chart
  document.getElementById("sectionwelcome").style.display = "none";
  document.getElementById("screenwelcome").style.display = "none";
  document.getElementById("screenpokedex").style.display = "none";
  document.body.style.background = "#F9F8E8";
  document.getElementById("screenchart").style.display = "block";
});

let selectOrder = document.getElementById("order-select"); //evento change que aplica al Selector para ordenar a los pokemon
selectOrder.addEventListener("change", () => {
  let orderFuction = orderData(allData, selectOrder.value);
  document.getElementById("cards").innerHTML = " ";
  showData(orderFuction);
});

let selectType = document.getElementById("filter-select"); //evento change que aplica al Selector para filtrar a los pokemon
selectType.addEventListener("change", () => {
  let filterFuction = filterData(allData, selectType.value);
  document.getElementById("cards").innerHTML = " ";
  showData(filterFuction);
});

let nameTall = document.createElement("h1");
nameTall.innerText =
  maxHeight(allData).name.slice(0, 1).toUpperCase() +
  maxHeight(allData).name.slice(1, maxHeight(allData).name.length);
nameTall.setAttribute("id", "name-tall"); //name-tall es el h1 que contiene el nombre del pokemon mas alto que esta en la card-tall
document.getElementById("card-tall").appendChild(nameTall);

let imgTall = document.createElement("img");
imgTall.src = maxHeight(allData).img;
imgTall.setAttribute("id", "img-tall"); //img-tall es la img que contiene la imagen del pokemon mas alto que esta en la card-tall
document.getElementById("card-tall").appendChild(imgTall);

let heightTall = document.createElement("h1");
heightTall.innerText =
  "I'm the tallest pokemon, my height is " + maxHeight(allData).size.height;
heightTall.setAttribute("id", "height-tall"); //height-tall es el h1 que contiene la altura de pokemon mas alto que esta en la card-tall
document.getElementById("card-tall").appendChild(heightTall);

let nameShort = document.createElement("h1");
nameShort.innerText =
  minHeight(allData).name.slice(0, 1).toUpperCase() +
  minHeight(allData).name.slice(1, minHeight(allData).name.length);
nameShort.setAttribute("id", "name-short"); //name-short es el h1 que contiene el nombre del pokemon mas corto que esta en la card-short
document.getElementById("card-short").appendChild(nameShort);

let imgShort = document.createElement("img");
imgShort.src = minHeight(allData).img;
imgShort.setAttribute("id", "img-short"); //img-short es la img que contiene la imagen  del pokemon mas corto que esta en la card-short
document.getElementById("card-short").appendChild(imgShort);

let heightShort = document.createElement("h1");
heightShort.innerText =
  "I'm the shortest pokemon, my height is " + minHeight(allData).size.height;
heightShort.setAttribute("id", "height-short"); //height-short es el h1 que contiene la altura del pokemon mas corto que esta en la card-short
document.getElementById("card-short").appendChild(heightShort);
