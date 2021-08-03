import { orderData, filterData, attack, defense } from '../src/data.js';
import { Chart } from './chart.js';


let name = [{ name: "bulbasaur" }, { name: "venusaur" }, { name: "ivysaur" }];
let orderNamesAz = [{ name: "bulbasaur" }, { name: "ivysaur" }, { name: "venusaur" }];
let orderNamesZa = [{ name: "venusaur" }, { name: "ivysaur" }, { name: "bulbasaur" }];
let num = [{ num: "001" }, { num: "003" }, { num: "002" }];
let orderNumAsc = [{ num: "001" }, { num: "002" }, { num: "003" }];
let orderNumDes = [{ num: "003" }, { num: "002" }, { num: "001" }];

describe('orderData', () => {
  it('deberia ser una funcion ', () => {
    expect(typeof orderData).toBe('function');
  });

  it('Debería retornar bulbasaur, ivysaur, venusaur para bulbasaur, venusaur, ivysaur', () => {
    expect(orderData(name, 'A-Z')).toEqual(orderNamesAz);
  });

  it('Debería retornar venusaur, ivysaur, bulbasaur para bulbasaur, venusaur, ivysaur', () => {
    expect(orderData(name, 'Z-A')).toEqual(orderNamesZa);
  });
 
  it('deberia retornar name para la opción " "', () => {
    expect(orderData(name, " ")).toEqual(name);
  });

  it('Debería retornar 001, 002, 003 para 001, 003, 002', () => {
    expect(orderData(num, 'asc')).toEqual(orderNumAsc);
  });

  it('Debería retornar 003, 002, 001 para 001, 003, 002', () => {
    expect(orderData(num, 'des')).toEqual(orderNumDes);
  });

  it('deberia retornar num para la opción " "', () => {
    expect(orderData(num, " ")).toEqual(num);
  });
  
 
});


let firstArr = [{name:"bulbasaur", type: ["poison", "grass"]},{name:"charmander",type:["fire"]}, {name: "kakuna",type:["bug", "poison"]}, {name: "oddish",type:["poison", "grass"] }];

let arrayTypePoison = [{name:"bulbasaur",type:["poison","grass"] }, {name: "kakuna", type:["bug", "poison"]}, {name: "oddish", type:["poison", "grass"]}];

let arrayTypeGrass = [{name:"bulbasaur", type: ["poison", "grass"]}, {name: "oddish",type:["poison", "grass"] }];

describe('filterData', () => {
  it('deberia ser una funcion ', () => {
    expect(typeof filterData).toBe('function');
  });


  it('deberia retornar objetos con tipo "poison" para la opción "poison" ', () => {
    expect(filterData(firstArr, 'poison')).toEqual(arrayTypePoison);
  });

  it('deberia retornar objetos con tipo "grass" para la opción "grass"', () => {
    expect(filterData(firstArr, 'grass')).toEqual(arrayTypeGrass);
  });

  it('deberia retornar el array que recibe "fisrtArr para la opción "filter-default"', () => {
    expect(filterData(firstArr,"filter-default")).toEqual(firstArr);
  });


});


let avgAttack = [{stats: {"base-attack": "118"}}, {stats:{"base-attack": "151"}}, {stats:{"base-attack": "198"}}];
let avgAtt =  "155.67";



describe('attack', () => {
  it('deberia ser una funcion ', () => {
    expect(typeof attack).toBe('function');
  });
  

  it('deberia retornar el promedio para "base-attack"', () => {
    expect(attack(avgAttack)).toEqual(avgAtt);
  });

  });


  let avgDefense = [{stats: {"base-defense": "111"}}, {stats:{"base-defense": "143"}}, {stats:{"base-defense": "189"}}];
let avgDef =  "147.67";



describe('defense', () => {
  it('deberia ser una funcion ', () => {
    expect(typeof defense).toBe('function');
  });
  

  it('deberia retornar el promedio para "base-defense"', () => {
    expect(defense(avgDefense)).toEqual(avgDef);
  });

  });
  
  
  describe('Chart', () => {
    it('deberia ser una funcion ', () => {
      expect(typeof Chart).toBe('function');
    });

  });