// How to create a function ?
/* We can give any name after functions but it should not start with a number, symbol or keywords */

function app() {
  console.log("Hi there");
}

// Another way to define a function using variables

let billu = function () {
  console.log("Billu Badmosh");
};

// 1. This is function declaration
function a() {
  console.log("a");
}

// 2. This is called function expression
let b = function () {
  console.log("b");
};

// Arrow Function

let c = () => {
  console.log("arrow");
};

c();

// Here we are doing such that we can use dynamic values
// The arg is actually parameters.
function dance(arg = "Lalu") {
  console.log(`${arg} can dance`);
}

dance("shipla"); // This is shipla. This is Arguments.
dance("bhola");

// If we dont send a value to the function that demands a parameter then it treats it as undefined.
dance();

// WHat are Rest OPERATORS? - These are used in situations when we send too many arguments for the function to accept it, then the rest as the name suggests assigns the rest to an array.

let rest_example = (a, b, c, ...d) => {
  console.log(a + b + c + d);
};

rest_example(1, 2, 3, 4, 5, 6, 7, 8, 9);

// this gives the result as "64,5,6,7,8,9"
// JavaScript’s behavior:
// 1 + 2 + 3 = 6
// Then 6 + [4,5,6,7,8,9]
// When you add a number to an array, JavaScript converts the array to a string:
// 6 + "4,5,6,7,8,9" = "64,5,6,7,8,9"

// First Class Functions - These are the functions which can be treated as values.

let abc = function (val) {
  val();
};

abc(function () {
  // Here we are directky sending the function as an argument
  console.log("Hi am ABC");
});

// Higher Order function - These are fns which can return a function or accept a function in its parameter.
// As in the previous example the function abc is a higher order function.

//Eg : 2

function hof() {
  return function () {
    console.log("Hi hof is a higher order function");
  };
}

hof()(); // the first bracket is to run the hof fn and the next () is to run the next function

// Pure and Impure Functions :
// The fn which changes the outside global value is called Impure function
// THe fn which does not change the global value is called Pure function

let random = 4;

function disp() {
  // Pure Fn
  console.log(random);
}

function inc() {
  // Impure Fn
  random++;
}

// ******* Closures *******
// closure --> A function which returns a function and the function which is returned always uses the variable of the parent function
// Closures = when a function remembers its parent scope, even after the parent has finished.

// Immidiately Invoked Functions Expression (IIFE) :
// -- It is an instantly invoked function.
// -- We dont need to externally call it. We just wrap it inside a () and then give a bracket at the end to call it ()

(function () {
  console.log("Hi IIFE");
})();

// Hoisting differences between Fns and Expressions

abcd();

function abcd() {
  console.log("Hi I am hoisted");
}

// Function declararions can be hoisted.
// Function expressions cannot be hoisted.

// function getScore(...scores) {
//   let total = 0;
//   scores.forEach(function (val) { // this foreach functions says that for each value in the scores array
//     total += val;
//   });
//   console.log("Score is " + total);
// }

// We can do this with arrow functions too

function getScore(...scores) {
  let total = 0;
  scores.forEach((val) => {
    // this foreach functions says that for each value in the scores array
    total += val;
  });
  console.log("Score is " + total);
}

getScore(1, 2, 3, 3, 4, 5, 6);

// Q. Pass a fn into a fn and execute it.

function Outer(Inner) {
  return Inner();
}

Outer(function () {
  console.log("Inner function passed inside outer function");
});

// Real world IIFE USE case

// Creating a discount Calculator

function Caldiscount(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let ten = Caldiscount(10);
// We create this because now when we use this function ten then each time it will calculate the value of dicount of 10%.
let twenty = Caldiscount(20);
console.log(ten(200));

// Counter

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let count1 = counter();
count1();
count1();

let count2 = counter();
count2();

counter()();
counter()()

console.log(rand);
var rand = 30; // Comes undefined because var is hoisted at the beginning of the load of the program



