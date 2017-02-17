var getEm = require("./csv.js");

// console.log(typeof getEm);

function csv(csv){
  csv = csv.replace(/\n/g, ",").split(",")
  // console.log(csv);

  let bucket = ''
  for (var i = 0; i < csv.length; i++) {
    // if (csv[i] == 'Last') {
    //   console.log(csv[i]);
    // }
  }
  console.log(bucket);
return bucket
}

csv(getEm)
