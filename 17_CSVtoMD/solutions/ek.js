// Created by Elana Kopelevich

var csv = require('../csv');

function csvToMd(csv){
  //console.log(csv);
  var Col1Max = 0;
  var Col2Max = 0;
  var Col3Max = 0;

  //var newString = csv.split(',').join('|');
  var lines = csv.split(/\r?\n/);
  var item;

  //console.log(lines);

  for (var i = 0; i < lines.length; i++) {
    item = lines[i].split(',');
    newLines.push(item);
    console.log('item', item);
    for (var j = 0; j < item.length; j++) {
      if (i % 3 === 0) {
        if (item.length > Col1Max) {
          Col1Max = item.length;
          //console.log(newString[i]);
        }
      } else if (i % 4 === 0) {
        if (item.length > Col2Max) {
          Col2Max = item.length;
        }
      } else if (i % 5 === 0) {
        if (item.length > Col3Max) {
          Col3Max = item.length;
        }
      }
    }
    console.log('lines', newLines);
  }
  console.log(Col1Max, Col2Max, Col3Max);
}

csvToMd(csv);
