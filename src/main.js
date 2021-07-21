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




