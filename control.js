/* 

CONDITIONAL STATEMENTS: 
- if
- else if 
- else 

*/

// If statement

let age = 25;

if (age >= 21) {
  console.log("Welcome to the party!"); 
}

/* 
ELSE AND ELSE IF STATEMENTS
- else if allows you to specify additional conditions to check if the initial condition is false 
- else statements act as a catch-all, executing its block of code by default
*/

let time = 14;

if (time < 12){
  console.log("Good morning!");
} else if (time < 18){ 
  console.log("Good afternoon!");
} else {
  console.log("Good evening!"); 
}

/* 

NESTED IF STATEMENTS 
- you can nest IF statements within each other to create more complex decision-making structures 

Using if (isRaining) is a shorthand way of checking if the value of isRaining is truthy (true or false)

falsy values 
- false
- o
- ""
- null
- undefined
- NaN

*/
 
// If it is raining 
  // If the umbrella is available, don't forget your umbrella

  // Othewise, sucks you don't have an umbrella 

// ELSE - if it is not raining 
  // You don't have an umbrella, good thing it's not raining 

function letItRain(isRaining, isUmbrellaAvailable){
  if (isRaining) /* if isRaining == true, a.k.a it is raining */ {
    if (isUmbrellaAvailable){
      console.log("It is raining, don't forget your umbrella!"); 
    } else {
      console.log("It is raining, sucks you don't have an umbrella"); 
    }
  } else /* if false, a.k.a it is not raining */ {
    console.log("You don't have an umbrella, good thing it's not raining"); 
  }
}

letItRain(true, false)


let isRaining = true; 
let umbrellaAvailable = false; 
let kindPerson = true; 

if (!isRaining){    
  console.log("Sunny day");
} else {
  console.log("Rainy day");

  // Kind person gives us umbrella
  if (kindPerson){
    umbrellaAvailable = true; 
    console.log("Yay for kind people, we don't have to get wet in the rain");
  } else {
    console.log("Wish we had an umbrella"); 
  }
}

/* 
LOOPS: Repeating actions 
- loops are used to execute a block of code multiple times 
- there are three types of loops in js: for, while, and do... while 
*/

// FOR LOOP
// The FOR loop is used to execute a block of code a SPECIFIED number of times 

for (let i=0; i < 5; i++){
  console.log("Value of i", i);
  console.log("loop number is", i+1); 
}

/* 

The FOR loop consists of three parts: initialization, condition, and iteration
- INITIALIZATION: the part that is executed once the for loop starts 
- CONDITION: the part that is evaluated before each iteration, and if it true, the block of code is executed
- ITERATION: the part that is executed after each iteration of the block of code 

- Iteration (let i = 0): initializes the loop variable 'i' to 0 keeping track of the count 
- Condition (i < 5): specifies the condition for executing the loop. The loop continues as long as the condition evaluates to be true 
- Incremement (i++): increases the value of 'i' by 1 AFTER each iteration
  - Could also (++i): increase the value of 'i' by 1 BEFORE each iteration 

*/

/* 
WHILE LOOP
- the while loop is used to execute a block of code as long as a specified condition is true
- the condition is checked before each iteration of the loop
 */

//  Print statement
console.log("Beginning of our for loop");

let count = 5;
while (count < 5){
  console.log(count);
  count++; 
}

console.log("The for loop ran");

// Condition (count < 5): specifies that the count must be less than 5 in order for the loop to run
// The loop continues as long as the condition evaluates to true 

/* 
DO... WHILE LOOP
- the do...while loop is similar to the while loop, but the block of code is executed at least once before the condition is checked 
*/

// Beginning of the do...while loop
console.log("Beginning of the do...while loop")

let num = 0;
do {
  // log the number
  console.log(num);

  // increment the number by one (num+=1)
  num++; 
  
} while (num < 5); 

// Another, complex example 
let newCount = 0; 
let isBadDay = true;

do {
  // newCount++; 

  if (isBadDay){
    newCount++; 
    console.log(newCount); 
    console.log("Get over it... the sun will come out tomorrow"); 
  } else /* else if (!isBadDay) */ {  
    newCount += 20; 
    console.log("It's a good day... I got a feeling that tonight is gonna be a good night"); 
  }

} while (newCount < 20); 

/* 
FOR...IN LOOP 
- the for...in loop is used to iterate over the properties of iterable objects such as arrays and strings 
- it can be used to iterate over the keys of an object 
*/

const fruits = ["apple", "banana", "cherry"];

// Iterate over the indexes in our array 
for (const i in fruits){
  console.log("Index", i);
  console.log("Fruit", fruits[i]);
}

// FOR...OF LOOP
// Iterate over the fruit items in the array 
for (const fruit of fruits){
  console.log("Fruit", fruit);
}

// Format list of fruit into a grocery list, we can add totals to the list if we want
function fruitGenerator(fruits){
  console.log("Fruits to buy at the grocery store:");
  console.log("===================================");

  {fruits ? console.log("Hello") : console.log("There are no fruits... give us some we are hungry")}

  for (let i in fruits){

    if (i == 0){
      numToBuy = 1 
      console.log("*", fruits[i], ":", numToBuy); 
    } else {
      console.log("*", fruits[i], ":", i); 
    }
  }
}

// fruitGenerator(["apple", "banana", "mango", "grapes", "strawberries", "watermelon", "pineapple"]); 
fruitGenerator(); 

/* 
NESTED LOOPS: you can nest loops within each other to create more complex iteration patterns.
- the inner loop is executed for each iteration of the outer loop
*/

for (let i=0; i<3; i++){
  console.log(`Printing the first loop, i: ${i}`);

  for (let j=0; j<3; j++){
    console.log(`(${i},${j})`);
  }

}
