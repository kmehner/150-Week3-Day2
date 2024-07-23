// UNDERSTANDING AND CREATING FUNCTIONS

/* Function Declaration, Parameters, and Return Values 
- Functions are reusable blocks of code that perform a specific task.
- Functions can take input values called parameters and return output values.

- Functions can be declared using the function keyword followed by a name and a block of code enclosed in curly braces.
- Parameters are placeholders for values that a function expects to receive when it's called. 
- The return statement specifies the value to be returned when the function is invoked. */

function greet(name){
  return "Hello, " + name + "!"; 
}

console.log(greet("John Doe")); 

// The same function python 

// def greet2(incomingName){
//   return "Hello, " + incomingName + "!"
// }
// print(greet2("John Doe"))


/* SCOPES AND CLOSURES
Scope refers to the visibility of variables within a program.

Global Scope: Variables declared outside of any function are global and can be accessed from anywhere in the program.
Local Scope: Variables declared inside a function are local to that function and cannot be accessed outside of it.

Variables declared inside a function are local to that function and cannot be accessed outside of it.
Variables declared outside of any function are global and can be accessed from anywhere in the program. */

globalMessage = "This is a global message"; 

function outer(){
  let message = "Hello"; 

  function inner(){
    console.log(message); // Accessing the message from the outer scope 

    console.log(globalMessage); 
  }

  // You cannot access inner() variable in outer() function
  // console.log(newMessage);  
  return inner; // Message prints hello 
}

let myFunc = outer();
myFunc();

// We cannot access the message outside of the outer() function because it is limited to function scope 
// console.log("Printing the message from the outer func", message); 
console.log("Printing the GLOBAL message:", globalMessage); 



// We cannot access in the innerFunc because it is located in the outerFunc 
function outerFunc(){
  function innerFunc(){
    console.log("Hello from the innerFunc"); 
    return 
  }
}

// let myFunc2 = innerFunc();
// myFunc2(); 

// console.log(innerFunc());


/* ARROW FUNCTIONS: more concise syntax for writing functions.
Lexical this Binding: Arrow functions do not have their own this value. They inherit the this value from the surrounding code.
No Binding of arguments: Arrow functions do not have an arguments object.
Implicit return: If the function body consists of a single expression, it is implicitly returned. */

// Arrow functions allow for shorter function syntax, particularly for simple, single-line functions 
const add = (a,b) => a + b; 

console.log(add(5, 3)); // Output 8 

// The arrow function inside the setInterval method preserves the context of the obj object. allowing it to access its properties 

// Adding function but larger

function addMe(a, b){
  let totalSum = a+b; 
  return totalSum; 
}
console.log(addMe(5, 3));

// Arrow functions with a single parameter do not require parentheses around the parameter list
const greet3 = name => `Hello, ${name}!`

console.log(greet3('John')); 