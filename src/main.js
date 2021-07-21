<<<<<<< HEAD
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
=======
import {orderNames} from './data.js';
import data from './data/pokemon/pokemon.js';



console.log(orderNames(data.pokemon, ['name'], 1));

document.getElementById("btn-pokedex").addEventListener("click", () => {  

            document.getElementById("screenwelcome").style.display ="none";
            document.getElementById("bdy").style.background ="#F9F8E8";   
            document.getElementById("screenpokedex").style.display ="block";
           
            
});


        data.pokemon.forEach((e)=>{

        let backgroundCard = document.createElement("div"); 
        let pokeFont = document.createElement("img");     
        pokeFont.src= "img/fondodepokemon.png";    
        pokeFont.setAttribute("class", "cardcontainer");  //cardcontainer contiene la imagen del fondo de las cartas
        backgroundCard.setAttribute("id", "boxcard");     //boxcard es el div que contiene la tarjeta cardcontainer y la pokeinfo
        backgroundCard.appendChild(pokeFont);
        document.getElementById("cards").appendChild(backgroundCard);//cards es un div que ocupa toda la pantalla donde se encuentra todo
       
        
       let numText = document.createElement("h2");     
        numText.innerText= e.num;        
        numText.setAttribute("id", "pokenum");  // poke num es el h2 que contiene el numero de la data
        backgroundCard.appendChild(numText); 
        
    
        let containerImport = document.createElement("div")  
        let imgPoke = document.createElement("img");   
        imgPoke.src = e.img;        
        imgPoke.setAttribute("id", "pokeimg");   // pokeimg es la img que contiene la imagen de la data
        backgroundCard.appendChild(imgPoke);         
          
    
       let nameText = document.createElement("h2");     
        nameText.innerText= e.name;   
        nameText.setAttribute("id", "pokename");  // pokename es el h2 que contiene el nombre de la data
        backgroundCard.appendChild(nameText);                
       

    
    });

            
      
    

  



    
     


    

        
         
       


       
    
     
   




//document.getElementById("imgpoke").src=data.pokemon[i].img;
>>>>>>> 23ae02df875cc269277b36cd3ff3004a864e9781




