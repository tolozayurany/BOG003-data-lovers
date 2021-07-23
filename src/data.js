
/*export const example = () => {
  return 'example';
};*/

export const orderNames = (data, sortBy) => {

  let orderAz = data.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });

  if (sortBy === 'A-Z') {
    return orderAz;
  }
  else if (sortBy === 'Z-A') {
     return orderAz.reverse();
 
  }

  let orderAsc = data.sort((a, b) => {
    if (a.num > b.num) {
      return 1;
    }
    if (a.num < b.num) {
      return -1;
    }

    return 0;
  });

   if (sortBy === 'asc' || sortBy === 'default') {
    return orderAsc;
  }
  else if (sortBy === 'des') {
     return orderAsc.reverse();
  }

};