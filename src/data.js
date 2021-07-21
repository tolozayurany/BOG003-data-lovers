
<<<<<<< HEAD

=======
>>>>>>> 23ae02df875cc269277b36cd3ff3004a864e9781
/*export const example = () => {
  return 'example';
};*/

<<<<<<< HEAD
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
=======
export const orderNames = (data, sortBy, sortOrder) => {

  
 
  
      switch (sortOrder) {
        case 0:
          let orderAz = data.sort((a,b) => {
            if (a.name> b.name) {
              return 1;
            }
            if (a.name< b.name) {
              return -1;
            }
            
            return 0;
          });
          return orderAz;
          break;
      
      
         case 1:
          let orderZa = data.sort((a,b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            
            return 0;
          });
          return orderZa.reverse();
          break;
      

        default:
          break;
      }



  



};



  
 




>>>>>>> 23ae02df875cc269277b36cd3ff3004a864e9781
