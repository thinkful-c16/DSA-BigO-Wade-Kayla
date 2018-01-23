'use strict';


//=== COUNT SHEEP ===//

function countSheep(num){
  //stopping condition of base case
  if(num === 0){
    console.log('All sheep jumped over the fence');
  } 
  //this is the recursive case
  //this will be executed until it reaches base case
  else{
    console.log(`${num}: Another sheep jump over the fence`);
    countSheep(num-1);
  }
}

//Linear runtime (O(n)) because the runtime of the function depends on how large
//is the input value

//== ARRAY DOUBLE ==//
function double_all(arr) {
  if (!arr.length) {
    return [];
  }
  return [arr[0] * 2, ...double_all(arr.slice(1))];
}

//Run time is dependent on the size of the array so this would be 
// linear (O(n))

//=== REVERSE STRING ===//
function reverseString(str) {
  if (str.length < 2) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

//The work being done is dependant on how long the string is 
//therefore the big O classificiation is linar (O(n))
