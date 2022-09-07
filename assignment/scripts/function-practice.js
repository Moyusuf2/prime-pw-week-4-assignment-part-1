console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log('Hello ' + name);
  return name;
}
// Remember to call the function to test
helloName('Stacy')

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;             
return firstNumber + secondNumber
}
console.log('Adding two numbers: 5 and 7 ', addNumbers(5,7))

// 4. Function to multiply three numbers & return the result
function multiplyThree( numb1, numb2, numb3){
  
  return numb1 * numb2 * numb3;
}
console.log(' Multiply three number 3,5,9 ', multiplyThree(3,5,9))


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else ( number < 0)
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let myList = [ 'remote', 'television', 'computer']
function getLast( myList ) {
  if (myList.length > 0){
    return myList[myList.length - 1];
  }
  else ( myList.length <=0 )
    return 'undefined';
  }
console.log(getLast(myList));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let myArray = [1,3, 5, 7];
let found = '';

function find( value,array){
  for(item of array){
    if(value === item){
      found = true;
    }
   }
  if( found === true){
    return true;
   } 
   else{
   return false;
   }
}
console.log(find(2,myArray));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for( let )

  

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

function sumAll( ) {
  let sum = 0
  numbers = [2, 4, 6, 8, 10, 12]
  // TODO: loop to add items
  for( let value of numbers){
    sum += value;

  }
  return sum;
}
console.log(' Sum of all is', sumAll())
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
