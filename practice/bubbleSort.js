let array = [1,2,9,3,11,3,10]
function bubble(arr) {
      var len = arr.length;

      for (var i = 0; i < len ; i++) {
        for(var j = 0 ; j < len - i - 1; j++){ // this was missing
        if (arr[j] > arr[j + 1]) {
          // swap
          console.log('top: ', arr[j]);
          var temp = arr[j];
          console.log('temp: ',temp);
          arr[j] = arr[j+1];
          console.log('arr+1', arr[j+1]);
          arr[j + 1] = temp;
          console.log('arr + 1', arr[j + 1]);
        }
       }
      }
      return arr;
    }
console.log(bubble(array));
