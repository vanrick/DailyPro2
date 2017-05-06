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
