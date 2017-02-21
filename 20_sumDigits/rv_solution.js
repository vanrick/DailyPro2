let num = 12
let num1 = 12345
let num2 = 6688


function sumz(num){
  do {
    var string = String(num);
    let numz = string.split('');
    num = 0;
    for (var i = 0; i < numz.length; i++) {
      num+=Number(numz[i])
    }
  } while (string.length > 1);
    console.log(num);
    return num;
}

sumz(num)
