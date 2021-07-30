import { orderData, filterData } from './data.js';
import data from './data/pokemon/pokemon.js';


let allData = data.pokemon;


const showData = (poke) => {


    poke.forEach((e) => {

        let backgroundCard = document.createElement("div");
        let pokeFont = document.createElement("img");
        pokeFont.src = "img/fondodepokemon.png";
        pokeFont.setAttribute("class", "cardcontainer");  //cardcontainer contiene la imagen del fondo de las cartas
        backgroundCard.setAttribute("id", "boxcard");     //boxcard es el div que contiene la tarjeta cardcontainer y la pokeinfo
        backgroundCard.appendChild(pokeFont);
        document.getElementById("cards").appendChild(backgroundCard);//cards es un div que ocupa toda la pantalla donde se encuentra todo


        let numText = document.createElement("h2");
        numText.innerText = "N° " + e.num;
        numText.setAttribute("id", "pokenum");  // poke num es el h2 que contiene el numero de la data
        backgroundCard.appendChild(numText);



        let imgPoke = document.createElement("img");
        imgPoke.src = e.img;
        imgPoke.setAttribute("id", "pokeimg");   // pokeimg es la img que contiene la imagen de la data
        backgroundCard.appendChild(imgPoke)



        let nameTextBtn = document.createElement("button");
        nameTextBtn.innerText = e.name;
        nameTextBtn.setAttribute("id", "btn-pokename");  // btn-pokename es el button que contiene el nombre de la data
        backgroundCard.appendChild(nameTextBtn);


        nameTextBtn.addEventListener("click", () => {

            let modal = document.getElementById("modal");
            let modalContent = document.getElementById("modal-content");
            modal.innerHTML = "";
            modalContent.innerHTML = "";
            let modalClose = document.createElement("span");
            modalClose.setAttribute("id", "close");
            let modalTextClose = document.createTextNode("X");
            modalClose.appendChild(modalTextClose);
            modalContent.appendChild(modalClose);

            modalClose.addEventListener("click", () => {

                modal.style.display = "none";
            });

            let modalBackground = document.createElement("div");
            modalBackground.setAttribute("id", "modal-background");
            modal.appendChild(modalBackground);
            modalBackground.appendChild(modalContent);

            modal.style.display = "block";


            let numTextModal = document.createElement("h2");
            numTextModal.innerText = "N° " + e.num;
            numTextModal.setAttribute("id", "pokenum-modal");  // poke num es el h2 que contiene el numero de la data
            modalContent.appendChild(numTextModal);

            let nameTextModal = document.createElement("h2");
            nameTextModal.innerText = e.name.slice(0,1).toUpperCase() + e.name.slice(1,e.name.length);
            nameTextModal.setAttribute("id", "pokename-modal");  // pokename es el button que contiene el nombre de la data
            modalContent.appendChild(nameTextModal);

            let imgPokeModal = document.createElement("img");
            imgPokeModal.src = e.img;
            imgPokeModal.setAttribute("id", "pokeimg-modal");   // pokeimg es la img que contiene la imagen de la data
            modalContent.appendChild(imgPokeModal)

            e.type.forEach((element) => {
            let typeModal = document.createElement("h2");
            typeModal.innerText = element;           
            typeModal.setAttribute("id", "type-modal");
            modalContent.appendChild(typeModal);

        });



            let lineModal = document.createElement("div");
            lineModal.setAttribute("id", "line-modal");
            modalContent.appendChild(lineModal);


            let heightModal = document.createElement("h2");
            heightModal.innerText = "height: " + e.size.height;
            heightModal.setAttribute("id", "height-modal");
            modalContent.appendChild(heightModal);

            let weightModal = document.createElement("h2");
            weightModal.innerText = "weight: " + e.size.weight;
            weightModal.setAttribute("id", "weight-modal");
            modalContent.appendChild(weightModal);

            let textResistant = document.createElement("h2");
            textResistant.setAttribute("id", "text-resistant");
            textResistant.innerText = "RESISTANT";
            modalContent.appendChild(textResistant);

            e.resistant.forEach((element) => {
            let resistantModal = document.createElement("h2");
            resistantModal.innerText = element;
            resistantModal.setAttribute("id", "resistant-modal");
            modalContent.appendChild(resistantModal);
        });  
                
        }); 
    });
};




document.getElementById("btn-pokedex").addEventListener("click", () => {
    document.getElementById("cards").innerHTML = " ";
    document.getElementById("screenwelcome").style.display = "none";
    document.getElementById("bdy").style.background = "#F9F8E8";
    document.getElementById("screenpokedex").style.display = "block";
    orderData(allData, "order-default");
    showData(allData);
});


let selectOrder = document.getElementById("order-select");
selectOrder.addEventListener('change', () => {
    let orderFuction = orderData(allData, selectOrder.value);
    document.getElementById("cards").innerHTML = " ";
    showData(orderFuction);
});



let selectType = document.getElementById("filter-select");
selectType.addEventListener('change', () => {
    let filterFuction = filterData(allData, selectType.value);
    document.getElementById("cards").innerHTML = " ";
    showData(filterFuction);
});
    

 




