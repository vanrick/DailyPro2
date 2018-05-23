var house = {
  price: 10000,
  squareFeet: 2000,
  owner: 'Taylor',
  getPricePerSquareFoot() {
        return house.price / house.squareFeet;
    },
};
console.log(house.price);
console.log(house.getPricePerSquareFoot());

// this
