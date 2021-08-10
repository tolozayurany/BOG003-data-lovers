export const orderData = (data, sortBy) => { //Order data es el algoritmo que usa el metodo sort para organizar datos
  let orderAz = data.sort((a, b) => {
    if (a.name > b.name) { //Si el parametro a es mayor que el b nos organiza los datos de forma descendente
      return 1;
    }
    if (a.name < b.name) { //Si el parametro a es menor que el b nos organiza los datos de forma ascendente
      return -1;
    }
  });

  if (sortBy === "A-Z") {  //Si el valor del parametro sortBy es igual a "A-Z"  retorna los datos en orden descendete
    return orderAz;
  } else if (sortBy === "Z-A") { //Si el valor del parametro sortBy es igual a "Z-A" retorna los datos en orden ascendente
    return orderAz.reverse();
  }

  let orderNum = data.sort((a, b) => {//Se repite el algoritmo anterior pero con los numeros
    if (a.num > b.num) {
      return 1;
    }
    if (a.num < b.num) {
      return -1;
    }
    return 0;
  });

  if (sortBy === "asc" || sortBy === "order-default") {
    return orderNum;
  } else {
    return orderNum.reverse();
  }
};

export const filterData = (data, condition) => { // Filterdata es la funcion que usa el metodo filter para filtrar datos
  if (condition === "filter-default") {
    return data;   //condicion que retorna toda la data para la opcion type("filter-default")
  }

  let filterType = data.filter((el) => el.type.includes(condition)); // aplicamos metodo filter y metodo includes para que traiga cada tipo de la data

  return filterType;
};

export const attack = (data) => { // attack es la funcion que da el promedio de ataque de los pokemon  usando el metodo map
  let sumAtt = 0;

  data.map((element) => {
    sumAtt = sumAtt + parseInt(element.stats["base-attack"]); // Acumulador para sumar todo los attack de los pókemon 
  });
  return (sumAtt / data.length).toFixed(2);// retonar el acumulador dividido en todos los ataques de los pokemon 
};

export const defense = (data) => {// defense es la funcion que da el promedio de defensa de los pokemon  usando el metodo map
  let sumDef = 0;

  data.map((element) => {
    sumDef = sumDef + parseInt(element.stats["base-defense"]);// Acumulador para sumar todas las defensas de los pókemon
  });

  return (sumDef / data.length).toFixed(2);// retonar el acumulador dividido en todas las defensas de los pokemon
};

export const maxHeight = (data) => { //maxHeight en la funcion que retorna en pokemon con mayor altura
  let pokemonHeightest = data.reduce((a, b) => {
    let max = parseFloat(a.size["height"]) > parseFloat(b.size["height"]) ? a : b; //si el a es mayor que b retorna a de lo contrario b
    return max;
  });
  return pokemonHeightest;
};
export const minHeight = (data) => { //minHeight en la funcion que retorna en pokemon con menor altura
  let pokemonSmallest = data.reduce((a, b) => {
    let min = a.size["height"] < b.size["height"] ? a : b; //si el a es menor que b retorna a de lo contrario b
    return min;
  });
  return pokemonSmallest;
};
