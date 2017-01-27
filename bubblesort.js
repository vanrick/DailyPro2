var arrNums = [34, 203, 3, 746, 200, 984, 198, 764, 9];


function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(arrNums);
console.log(arrNums)

// function bubbleSort(nums){
//   var swap;
//   if (swap = false) {
//     for (var i = 0; i < nums.length; i++) {
//       if (nums[i] > nums[i+1]) {
//         var tempVar = nums[i]
//         nums[i] = nums[i+1]
//         nums[i+1] = tempVar
//         swap = true
//       }
//     }
//   }
//   if (swap) {
//     return nums
//   }
//   }
//
//
//
// console.log(bubbleSort(arrNums));


// arrayX = [1,9,-1,5,10,23,-2,7,4,5,1];
//
// for (i = 0; i <= arrayX.length-1; i++)
//   {
//     if (arrayX[i] > arrayX[i+1])
//       {
//         temp = arrayX[i+1];
//         arrayX[i+1] = arrayX[i];
//         arrayX[i] = temp;
//         i = i-2;
//       }
//   }
// console.log(arrayX);
// console.log('hiii!');
