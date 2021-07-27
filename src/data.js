// estas funciones son de ejemplo

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
    
  });

  if (sortBy === "asc" || sortBy === "order-default" ) {
    
    return orderNum;
   
  } else  {
   
    return orderNum.reverse()
  }
  
};
