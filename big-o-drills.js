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