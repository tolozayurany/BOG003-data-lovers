
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

export const attack = (data) => {
 
  
  let sumAtt = 0;
  
data.map(element => {

  sumAtt = sumAtt + parseInt(element.stats["base-attack"]); 

  
      
   });
    return (sumAtt / data.length).toFixed(2);

};


  export const defense = (data) => { 
  
    let sumDef = 0;
    
  data.map(element => {
  
    sumDef = sumDef + parseInt(element.stats["base-defense"]); 
        
     });
     
    return (sumDef/ data.length).toFixed(2);

};






