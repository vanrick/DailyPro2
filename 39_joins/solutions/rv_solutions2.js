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

function right_obj(state, fk){
  let returnObj = {}
   state.forEach(function(state_obj){
    if (state_obj.id === fk) {
     returnObj = state_obj
    }
  })
  return returnObj
}

function join(left, right, foreignKey, primaryKey, newKey) {
  return left.map(function(left_obj){
    left_obj[newKey] = right_obj(right, left_obj[foreignKey])
    delete left_obj[foreignKey]
    return left_obj
  })
}
console.log(join(cities, states, 'state_id', 'id', 'state'));
