import dataFunctions  from './data.js';
import data from './data/pokemon/pokemon.js';

 let showData = data.pokemon;
 dataFunctions.orderNames(data);

document.getElementById("btn-pokedex").addEventListener("click", () => {
    document.getElementById("screenWelcome").style.display = "none";
    document.getElementById("bdy").style.background = "#F9F8E8";
    document.getElementById("screenPokedex").style.display = "block";
})

showData.forEach((element) => {

    let backgroundCard = document.createElement ("div"); 
    backgroundCard.setAttribute('id','card')
    let infoCard = document.createElement ("div");
    infoCard.setAttribute('id', 'infoCard');
    let imgFont = document.createElement("img");
    imgFont.src = 'img/fondodepokemon.png';
    imgFont.setAttribute('id', 'imgFont');
    backgroundCard.appendChild(imgFont);
    backgroundCard.appendChild(infoCard);    

    let numText = document.createElement("h2");
    numText.setAttribute('id','numPoke');
    numText.innerText = element.num; 
    infoCard.appendChild(numText);
    document.getElementById("screenPokedex").appendChild(backgroundCard);

    let imagePoke = document.createElement("img");
    imagePoke.setAttribute('class','imgPoke');
    imagePoke.src = element.img;
    infoCard.appendChild(imagePoke);
    document.getElementById("screenPokedex").appendChild(backgroundCard);

    let nameText = document.createElement("h1");
    nameText.setAttribute('class','namePoke');
    nameText.innerText = element.name; 
    infoCard.appendChild(nameText)
    document.getElementById("screenPokedex").appendChild(backgroundCard);
   });

   document.getElementById("btnOrderZA").addEventListener("click", () => {
    
   });




