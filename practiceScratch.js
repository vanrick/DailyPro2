// FizzBuzz Recursion
function recurs(num){
  if (num === 0) {
    return 1
  }
  if (num % 3 == 0 & num % 5 == 0) {
    console.log('FizzBuzz');
  }else if(num % 3 == 0){
    console.log('Fizz');
  }else if(num % 5 == 0){
    console.log('Buzz');
  }else{
    console.log(num);
  }
  return recurs(num-1)
}

recurs(100)

// Garland Word

let gWord = 'onion'
let gWord1 = 'onionionionionionionionionionion'
let gWord2 = 'alfalfa'
let gWord3 = 'programmer'
let gWord4 = 'ceramic'

function garland(word){
  word = word.split('').join('')
  let degree = 0
  for (var i = 1; i < word.length; i++) {
    let front = word.slice(0,i)
    // console.log('front: ',front);
    for (var j = 1; j <= i; j++) {
      console.log('back: ',word[j])
      let back = word.slice(-j)
      // if (front == back && front.length > 0) {
      //   degree = front.length
      // }
    }
  }
  // console.log('degree: ', degree);
  return degree
}

garland(gWord3)

// var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// var citrus = fruits.slice(2,3);
// console.log(citrus);

var fruits1 = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus1 = fruits1.splice(1,2)
console.log(citrus1);
console.log(fruits1);



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

const locationKey = {
  US: 1,
  UK: 2,
  SK: 3
}

function combineNames(first, last){
  return first + ' ' + last;
}

function inchesToCent(num){
  return Math.ceil(num * 2.54);
}

function enumerateLocation(location, locationKey){
  return locationKey[location];
}

function createUsername(email) {
  var indexOfAt = email.indexOf('@');
  return email.split('').splice(0, indexOfAt).join('');
}


function normalizeUsersArray(userArray){
  // return userArray.map(user => {
  //   let name = combineNames(user.first_name, user.last_name);
  //   let height = inchesToCent(user.height);
  //   let location = enumerateLocation(user.locations, locationKey);
  //   let username = user.username ? user.username : createUsername(user.email);
  //
  //   return {
  //     name: name,
  //     height: height,
  //     location: location,
  //     username: username,
  //     email: user.email
  //   }
  //
  // })

  let normalizedUsers = [];

  for (let user of users) {
    let name = combineNames(user.first_name, user.last_name);
    let height = inchesToCent(user.height);
    let location = enumerateLocation(user.locations, locationKey);
    let username = user.username ? user.username : createUsername(user.email);

    normalizedUsers.push({
      name: name,
      height: height,
      location: location,
      username: username,
      email: user.email
    });
  }

  return normalizedUsers;
}

console.log(normalizeUsersArray(users));
