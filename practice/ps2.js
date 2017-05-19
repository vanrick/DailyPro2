function addTwoObj(key, value, obj){
  obj[key] = value
  // console.log(obj);
  return  obj

}

console.log(addTwoObj('hi', 'beer', {a:'b'}))
