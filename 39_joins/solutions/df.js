var cities = [
  {id: 2, name: "Milwaukee", state_id: 3},
  {id: 9, name: "Pella", state_id: 9},
  {id: 4, name: "Jasper", state_id: 7},
  {id: 11, name: "Greenville", state_id: 10},
  {id: 8, name: "West Lafayette", state_id: 7},
  {id: 45, name: "Chicago", state_id: 22},
  {id: 1, name: "Denver", state_id: 1},
]

var states = [
  {id: 1, name: "Colorado"},
  {id: 3, name: "Wisconsin"},
  {id: 9, name: "Iowa"},
  {id: 7, name: "Indiana"},
  {id: 22, name: "Illinois"},
  {id: 10, name: "South Carolina"}
]

const clone = (o) => Object.assign({}, o)

const removeKey = (o, key) => {
  delete o[key]
  return o
}

const join = (left, right, foreignKey, primaryKey, newKey) =>
  left
    .map(clone)
    .map((l_item) => {
      l_item[newKey] = right.find((item) => l_item[foreignKey] === item[primaryKey])
      return l_item
    })
    .map((o) => removeKey(o, foreignKey))

var result = join(cities, states, "state_id", "id", "state")
console.log(JSON.stringify(result))
