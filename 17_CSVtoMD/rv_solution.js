var getEm = require("./csv.js");

// console.log(typeof getEm);

function csv(csv){
  csv = csv.replace(/\n/g, ",").split(",")
  console.log(csv);

  let bucket = ''
  for (var i = 0; i < csv.length; i++) {
    if (csv[i]) {
      bucket = csv[0] + ' | ' + csv[1] + ' | ' + csv[2]
    }
  }
  console.log(bucket);
return bucket
}

csv(getEm)
