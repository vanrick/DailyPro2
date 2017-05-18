var cities = [
  {id: 1, name: "Denver", state_id: 1},
  {id: 2, name: "Milwaukee", state_id: 3},
  {id: 9, name: "Pella", state_id: 9},
  {id: 4, name: "Jasper", state_id: 7},
  {id: 11, name: "Greenville", state_id: 10},
  {id: 8, name: "West Lafayette", state_id: 7},
  {id: 45, name: "Chicago", state_id: 22}
]

var states = [
  {id: 1, name: "Colorado"},
  {id: 3, name: "Wisconsin"},
  {id: 9, name: "Iowa"},
  {id: 7, name: "Indiana"},
  {id: 22, name: "Illinois"},
  {id: 10, name: "South Carolina"}
]

function cityWithId(city_name){
  return city_name.map(function(city){
    let id = city.id;
    let name = city.name;
    return {
      id: id,
      name: name
    }
  })

}
// console.log(cityWithId(cities, states));
function stateWithId(state_name){
  return state_name.map(function(state){
    let id = state.id;
    let name = state.name;
    return{
      id: id,
      name: name
    }
  })
}
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
    return fruit.name == 'Denver';
}

console.log(cities.find(findCherries));

function join(left, right, foreignKey, primaryKey, newKey){
  return
}
