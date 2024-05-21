
//this is reverse string function 
let originalString = "aderonke"
const reverseString = function (string){
   return string.split("").reverse('').join("");
  }
let reversedString = reverseString(originalString);
console.log(reversedString);

// this is characters count 
const count = ["1", "$", "#", "~", "&", "@", "!", "$"];
function countCharacters (count){
  return count.length;
}
console.log(countCharacters(count))

//this is uppercase
let words = "geezeer";

function uppercase(first) {
    return first.charAt(0).toUpperCase(0)+first.slice(1);
}

console.log(uppercase(words)); 

// this is second section 

//find minimum
const numbers =[3, 5, 7, 11, 21,45,91,20,29];

function findmin (numbers){
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}
console.log(findmin(numbers));

//find maximum
const values = [2, 4, 4, 7, 8, 9, 10, 12];
function findMax (numbers){
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(findMax(values))


//find sum of arrays 
const arrays = [1, 3, 5, 7, 8, 9, 10, 12];

var sum = 0;
var i=0;

while(i<arrays.length){
  sum += arrays[i];
  i++

}
console.log(sum); 


//filter arrays
const playas =["tunde","tayo","smithRowe", "abo" ,"tope"];

delete playas[3];
console.log(playas);


//factorial representation
let n= 5
function factorial(n) {
  if (n < 0) {
      return undefined; // Factorial is not defined for negative numbers
  }
  let result = 1;
  for (let i = 1; i <=5; i++) {
      result *= i;
  }
      return result;
  }
console.log(factorial(5)); //result would be 5*4*3*2*1=120
  

//prime number check 
const array= [3,5,7,8,45,66,9,41,33,37,97,91]

function checkPrime (array) {
  const prime = numbers [0];
  for (let i= 1; i<array.length; i++){
    if (arrays[i] > prime){
      prime= numbers[i]
    }
  }
  return prime;
}
console.log(checkPrime(array));


//fibonaccisequence
function generateFibonacci(numTerms) {
  let fibonacciSequence = [0, 1];
  for (let i = 2; i < numTerms; i++) {
      fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]; // Calculate the next term
  }
  return fibonacciSequence;
}

let numTerms = 10;
let fibonacciSequence = generateFibonacci(numTerms);
console.log(fibonacciSequence); 















