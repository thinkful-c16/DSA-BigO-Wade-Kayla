'use strict';

//==== EVEN OR ODD ====/
function isEven(value){
  if (value % 2 === 0){
    return true;
  }
  else
    return false;
}
// O(1) because it's performing a check (basic math operation) and returning
//a boolean; the input is just one value with one operation being performed on it

//=== ARE YOU HERE? ==//

function areYouHere(arr1, arr2) {
  let eyeTicks = 1;
  let jayTicks = 1;
  for (let i=0; i<arr1.length; i++) {
    eyeTicks++;
    console.log('ticks for EYE', eyeTicks);
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      jayTicks++;
      console.log('ticks for JAY', jayTicks);
      const el2 = arr2[j];
      if (el1 === el2) return true ;
    }
  }
  return false;
}
//compares every el in arr 1 with every el in arr 2
//six checks for every one check in i (the first loop)
//always corresponds to the array length of arr 2
//only has to loop first arr once
// console.log(areYouHere([2, 3, 4, 4, 2, 1], [1, 1, 6, 7, 1, 20]));
// console.log(areYouHere([1,3], [1,2,4,5]));

//O(n^2) because it's a nested loop 
