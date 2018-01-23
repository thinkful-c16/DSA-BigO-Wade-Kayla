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
//therefore the big O classificiation is linear (O(n))

// === TRIANGULAR NUMBER ===//
function triangle(n) {
  if (n < 2) 
    return n;
  return n + triangle(n - 1);
}

// Because the recursive function will only be called
//  as many times as n is equal to, the run time complexity of
// this will be linear (O(n)) where n is the input

// === STRING SPLITTER === //
function split(str, sep) {
  var idx = str.indexOf(sep);
  if (idx == -1) 
    return [str];
  //you don't have to return an array, you can return a string as an array of 
  //character 
  //return str;
  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep));
}
// The run time complexity of this function is linear because the amount of operations performed will
// predictably scale with the amount of separators in the string. This is O(n) where n is the amount of separators
// found in the string

// === BINARY REPRESENTATION === //
function convertToBinary(num){
  if(num>0){
    let binary = Math.floor(num%2); //save the reminder in binary
    //divide the number by 2 and send that to the function again
    //carry the reminder to the next recursion call
    return (convertToBinary(Math.floor(num/2))+ binary);
  }else{
    return ''; //base case - at some point the divisions will lead to 0
  }
}

// Run time complexity is linear here, because amount of operations directly reflects the magnitude of argument num
// If we pass 10 as num, function will perform operations for every integer 10 - 0.
// So this would be O(n) where n is the value of num.

// === ANAGRAMS === //
function anagrams(prefix, str){
  if(str.length <= 1){
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for(let i=0; i<str.length; i++){
      let currentLetter = str.substring(i, i+1); 
      let previousLetters = str.substring(0,i);
      let afterLetters = str.substring(i+1);
      anagrams(prefix+currentLetter, previousLetters+afterLetters);
    }
  }
}
function printAnagram(word){
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}

// Run time complexity for this function is exponential. Because our recursive function call creates nested loops - where the amount of nested
// loops is equivalent to string length - the run time for this functions increases exponentially as the string input grows larger.
// O(2^n) where n is the length of the given string.