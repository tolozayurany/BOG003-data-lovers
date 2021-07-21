

/*export const example = () => {
  return 'example';
};*/

const dataFunctions = { 

  orderNames: (data) => {
    let orderAz = data.sort(function (a,b){
      if (a.name < b.name){
          return -1;
      }
      if (a.name > b.name){
          return 1;
      }
      return 0;
      }); 
      return orderAZ;
  },
  
};
export default dataFunctions;