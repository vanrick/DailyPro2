const users = [
  {
    first_name:'John',
    last_name:'Snow',
    height:77,
    locations:'UK',  //US=1, UK=2, SK=3
    userName:'neverDie',
    email:'john@blackCrow.com'
  },
  {
    first_name:'Eric',
    last_name:'Cartman',
    height:54,
    locations:'US',
    email:'the_coon@sp.com'
  },
  {
    first_name:'Whinny',
    last_name:'the Pooh',
    height:26,
    locations:'SK',
    email:'honey_lover@pooh.com'
  }
]
// Write a function that returns an array of reformatted objects that looks like this:
// [
//   {
//     name:"John Snow",
//     height:196,
//     location:2,
//     userName:"neverDie",
//     email:'john@blackCrow.com'
//   },
//   {
//     name:"Eric Cartman",
//     height:137,
//     location:1,
//     userName:"the_coon",
//     email:'the_coon@sp.com'
//   },
//   {
//     name:"John Snow",
//     height:66,
//     location:3,
//     userName:"honey_lover",
//     email:'honey_lover@pooh.com'
//   }
// ]
//The name should be first then last
//the height should be converted from inches to centimeters
//the location should be enumerated
//if the user has a username use that otherwise use the email before the @
let locationKey ={
  US: 1,
  UK: 2,
  SK: 3
}

function combineNames(first_name, last_name){
  return first_name + ' ' + last_name;
}
function heightConverter(height){
  return Math.ceil(height * 2.54)
}
function getUserName(userName){
  let index = userName.indexOf('@');
  return userName.split('').splice(0,index).join('');
}
function enumerateLocation(location, locationKey){
  return locationKey[location];
}
function convertedJSON(users){
  return users.map(function(key){
    let name = combineNames(key.first_name, key.last_name);
    let height = heightConverter(key.height);
    let location = enumerateLocation(key.locations, locationKey);
    let userName = getUserName(key.email);
    let email = key.email
    return {
      name: name,
      height: height,
      locations: location,
      userName: userName,
      email: email
    }
  })
}
console.log(convertedJSON(users));
