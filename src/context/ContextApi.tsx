import React from 'react';

export default React.createContext({
  data: [],
  transections:[],
  decreseQuantity: (id: number) => {},
  increseQuantity: (id: number) => {},
  checkCart: (id: number) => {},
  zeroQuantity: (id: number) => {},
  incQuantityTo: (id: number, count: number) => {},
  checkout: (total:number) => {},
});
