// function join(left, right, fk, pk, newKey){
//   return left.map(function(left_obj){
//     left_obj[newKey] = matchingStates(left_obj[fk],right)
//     delete left_obj[fk]
//     return left_obj
//   })
// }
// console.log(join(cities, states,'state_id', 'id','state'));
//
// function matchingStates(id, right){
//   let return_obj = {}
//    right.forEach(function(key){
//     if (id == key.id) {
//       return_obj = key
//     }
//   })
//   return return_obj
// }

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
function matchingStatesWithFK(states, fk){
  let result = {}
  states.forEach(function(state){
    if (state.id === fk) {
      result = state
    }
  })
  return result
}
// console.log(matchingStatesWithFK(states, 1));
function join(left, right, fk, pk, newKey){
  return left.map(function(obj){
    obj[newKey] = matchingStatesWithFK(right, obj[fk]);
    delete obj[fk]
    return obj
  })
}
console.log(join(cities, states, 'state_id', states.id, 'state'));
