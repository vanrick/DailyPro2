// Created by Elana Kopelevich

var input = {
  "Ila Huels": [
    "OPTIMIZE WEB-ENABLED SUPPLY-CHAINS",
    "brand sexy channels",
    "ENVISIONEER ROBUST E-COMMERCE",
    "TRANSFORM WIRELESS ARCHITECTURES",
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS"
  ],
  "Cristopher Feest": [
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS",
    "brand sexy channels",
    "BENCHMARK 24/7 PARADIGMS"
  ]
};

function wordCloud(input){
  var names = [];
  var terms = [];
  var cloud = [];
  var x = 1;
  var termObj = {};

  for (var i in input) {
    for (var j = 0; j < input[i].length; j++) {
      terms = input[i][j].split(' ');

      for (var k = 0; k < terms.length; k++) {
        cloud.push(terms[k]);
        if(cloud.indexOf(k) !== k){
          x++;
        }
        termObj[terms[k]] = { count: x, people: names};
      }
    }
    if (true) {
      names.push('ila');
    } else if (true) {
      names.push('chris');
    }
  }
  console.log(termObj);
}

wordCloud(input);
