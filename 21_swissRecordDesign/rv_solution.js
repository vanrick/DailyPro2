let mathQuestion = "What is 5 minus 3 and 8 plus 2 divided by 3"
let math2 = 'What is 10 minus 2 and 9 plus 3 divided by 4'

function mathy(input){
  let second = input.replace(/\bwhat|is|b\S+/ig,"")
  let first  = second.replace(/\s+/g,' ').trim().split(' ')
  // console.log(first);
  let bucket = 0
  for (var i = 0; i < first.length; i++) {
    if (first[i]=='minus') {
      let a = first[i-1]
      let b = first[i+1]
      bucket = (Number(a) - Number(b))
      // console.log(a,b);
    }else if (first[i] == 'and'){
      let a = bucket
      let b = first[i+1]
      bucket = (Number(a) + Number(b))
    }else if(first[i] == 'plus'){
      let a = bucket
      let b = first[i+1]
      bucket = (Number(a) + Number(b))
    }else if(first[i]=='divided'){
      let a = bucket
      let b = first[i+1]
      bucket = (Number(a)/Number(b))
    }
  }
  console.log(bucket);
  return bucket
}

mathy(mathQuestion)
mathy(math2)
