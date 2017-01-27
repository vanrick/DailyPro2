// Created by Elana Kopelevich

var fs = require('fs');

function formatJson(books){
  var titles = [];
  for (var book in books) {
    if (books[book].title === books[book].title) {
      books[book].author2 = books[book - 1].author;
    }
    //titles.push(books[book].title);

  }
  // for (var i = 0; i < titles.length; i++) {
  //   if (titles[i] === titles[i - 1]) {
  //     books
  //   }
  // }
  console.log(titles);
}

function readFile(file){
  var books = {};
  fs.readFile(file, 'utf8', function( err, data ) {
    if(err) throw err;
    books = JSON.parse(data).data;
    //console.log(books);
    formatJson(books);
  });
}

readFile('./../books.json');
