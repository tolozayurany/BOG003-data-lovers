import { orderData } from '../src/data.js';


    let name = [{name:"bulbasaur"}, {name:"venusaur"}, {name:"ivysaur"}];
    let orderNamesAz = [{name:"bulbasaur"}, {name:"ivysaur"}, {name:"venusaur"}];
    let  orderNamesZa = [{name:"venusaur"}, {name:"ivysaur"}, {name:"bulbasaur"}];
    let num = [{num:"001"}, {num:"003"}, {num:"002"}];
    let orderNumAsc = [{num:"001"}, {num:"002"}, {num:"003"}];
    let orderNumDes = [{num:"003"}, {num:"002"}, {num:"001"}];



describe('orderData', () => {
  it('deberia ser una funcion ', () => {
    expect(typeof orderData).toBe('function');
  });

  it('A-Z', () => {
    expect(orderData(name,'A-Z')).toEqual(orderNamesAz);
  }); 
  
    it('Z-A', () => {
      expect(orderData(name, 'Z-A')).toEqual(orderNamesZa);
    });
    
    it('asc', () => {
      expect(orderData(num,'asc')).toEqual(orderNumAsc);
    }); 

    it('des', () => {
      expect(orderData(num,'des')).toEqual(orderNumDes);
    });

});

 