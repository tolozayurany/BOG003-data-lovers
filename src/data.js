
/*export const example = () => {
  return 'example';
};*/

export const orderData = (data, sortBy) => {
  let orderAz = data.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }


  });

  if (sortBy === "A-Z") {

    return orderAz;

  } else if (sortBy === "Z-A") {
    return orderAz.reverse();
  }

  let orderNum = data.sort((a, b) => {
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

    return orderNum.reverse()
  }

};


export const filterData = (data, condition) => {

  if (condition === "filter-default") {
    return data;
  }

  let filterType = data.filter((el) => el.type.includes(condition));

  return filterType;


};


/*export const computeStats = (data) => {

  let sumAtt = 0; 
  let sumDef = 0;
  data.reduce((a, b) => 
    sumAtt = a + parseInt(b.stats["base-attack"])  //El ,0 es el valor inicial que se le da al argumento a
    //sumDef = a + parseInt(b.stats["base-defense"]),0 
    
);

return (sumAtt / data.length).toFixed(2);
};*/

export const computeStats = (data) => {
  let sumAtt = 0;
  let sumDef = 0;
  data.map(element => {
    sumAtt = sumAtt + parseInt(element.stats["base-attack"]);
    sumDef = sumDef + parseInt(element.stats["base-defense"]);


}); 

return (sumAtt /  data.length).toFixed(2) + " " + (sumDef / data.length).toFixed(2);;
};
