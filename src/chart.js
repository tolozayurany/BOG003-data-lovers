

import { attack, defense } from './data.js';
import data from './data/pokemon/pokemon.js';


let allDataChart = data.pokemon;

let chart = document.getElementById('myChart').getContext('2d');
let backgroundAtt = chart.createLinearGradient(0, 0, 0, 600);      
backgroundAtt.addColorStop(0, '#43DF94');
backgroundAtt.addColorStop(1, '#37B1F5');

let backgroundDef = chart.createLinearGradient(0, 0, 0, 600);      
backgroundDef.addColorStop(0, '#3BD7F9');
backgroundDef.addColorStop(1, '#0F39A5');




        const myChart = new Chart(chart, {
            type: 'bar',
            data: {
                labels: ['Base-attack', 'Base-defense'],
                datasets: [{
                   label: 'Average', 
                    data: [
                        attack(allDataChart),
                        defense(allDataChart)
                    ],
                    backgroundColor: [
                        backgroundAtt,
                        backgroundDef
                     ],
                   
                    
                }]
            },
            options: {
               
                scales: {
                    
                    y: [{
                        beginAtZero: true,
                  }]
                },
              
             },
             
        
        });
        window.myChart = myChart;
   

   



