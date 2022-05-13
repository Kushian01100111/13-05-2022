// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function sums(n){
    //Number to a array, sums numbers of array
    return  n.toString().split("").map(n => Number(n)).reduce((a,b)=> a + b, 0)//3 Sums the nums of the array 
  }
  function digital_root(n) {
    //Gives me a number 
    let result = sums(n)//take sum number
    for (let i = 0 ; i < 500; i++){
       if(result > 9){ // check if the num is of one digit
      let arr = result;
      result = sums(arr)//if not repeat 2-4
    } else{//if it of one digit return num
      return result 
    }
   }