import { attack, defense } from "./data.js";
import data from "./data/pokemon/pokemon.js";


let allDataChart = data.pokemon;

let chart = document.getElementById("myChart").getContext("2d"); //La varible chart contiene el div myChart
let backgroundAtt = chart.createLinearGradient(0, 0, 0, 600); //La backgroundAtt es la primera barra que usa al div y le aplica el metodo createLinearGradient para darle un fondo en degrade
backgroundAtt.addColorStop(0, "#43DF94"); //Este es el primer color del degrade de la primera barra
backgroundAtt.addColorStop(1, "#37B1F5");//Este es el segundo color del degrade de la primera barra

let backgroundDef = chart.createLinearGradient(0, 0, 0, 600); //La backgroundDef es la segunda barra que usa al div y le aplica el metodo createLinearGradient para darle un fondo en degrade
backgroundDef.addColorStop(0, "#3BD7F9");//Este es el primer color del degrade de la segunda barra
backgroundDef.addColorStop(1, "#0F39A5");//Este es el segundo color del degrade de la segunda barra

// eslint-disable-next-line
const myChart = new Chart(chart, { // clase Chart que contiene la grafica usando la librria chart.js
  type: "bar",
  data: {
    labels: ["Base-attack", "Base-defense"],
    datasets: [
      {
        label: "Average",
        data: [attack(allDataChart), defense(allDataChart)],
        backgroundColor: [backgroundAtt, backgroundDef],
      },
    ],
  },
  options: {
    scales: {
      y: [
        {
          beginAtZero: true,
        },
      ],
    },
  },
});
window.myChart = myChart;
