// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};*/

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



  
 




