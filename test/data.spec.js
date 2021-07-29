import { orderData, filterData } from '../src/data.js';


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

  it('Debería retornar 001, 002, 003 para 001, 003, 002', () => {
    expect(orderData(num, 'asc')).toEqual(orderNumAsc);
  });

  it('Debería retornar 003, 002, 001 para 001, 003, 002', () => {
    expect(orderData(num, 'des')).toEqual(orderNumDes);
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

});