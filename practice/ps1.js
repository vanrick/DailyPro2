const users = [
  {
    first_name:'John',
    last_name:'Snow',
    height:77,
    location:'UK',  //US=1, UK=2, SK=3
    userName:'neverDie',
    email:'john@blackCrow.com'
  },
  {
    first_name:'Eric',
    last_name:'Cartman',
    height:54,
    location:'US',
    email:'the_coon@sp.com'
  },
  {
    first_name:'Whinny',
    last_name:'the Pooh',
    height:26,
    location:'SK',
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

function newArray(array) {
  let locations = {
    'US': 1,
    'UK': 2,
    'UX': 3
  };

  let result = [];

  for (var i = 0; i < array.length; i++) {
    let name = array[i].first_name + " " + array[i].last_name;
    let height = array[i].height * 2.54;
    let index = array[i].email.indexOf('@');

    if(!array[i].userName){
      var username = array[i].email.slice(0, index);
    } else {
      var username = array[i].userName;
    }

    result.push({
      name: name,
      height: height,
      location: locations[array[i].location],
      username: username,
      email: array[i].email
    });

  }
  console.log(result);
  return result;
}

newArray(users);
