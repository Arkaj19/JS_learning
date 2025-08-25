// Arrays
//Declaring marks
// let marks = [10, 20, 50];

//Modifying an array
// marks[2] = 40;
// marks[1] = 50;
// console.log(marks[1]);

// Methods

//1. Push
// marks.push(80);
// console.log(marks);

//2. Pop
// marks.pop();

//3. Shift - This removes values from the beginning.

// marks.shift();
// console.log(marks);

let marks = [10, 20, 50, 80, 90, 70, 67];
console.log("NEW VERSION:", marks);

marks.splice(3, 1); // This starts removing the element from 3rd index, and exactly removes '1' index since it is given as 1 in the second parameter.
console.log(marks);

marks.shift(); // This removes the first element of the array
console.log(marks);

marks.unshift(3); // This adds a specified element at the beginning of the array
console.log(marks);

marks.reverse(); // This reverses the array
console.log(marks);

let new_marks = marks.slice(2, 5); // Doesn't overwrites the main array but slices the main array and places it in the new declared array
// Including the first index and excluding the ending index
console.log(new_marks);

marks.sort(); // Marks is sorted based on string comparison default
console.log(marks); // [20, 3, 50, 67, 70, 90]
// Hence we can feel that the order is sort of different but its that 2 comes before 3 then 4 then 5 then 6 then 7 ... 2 -> 3 -> 5 -> 6 -> 7 -> 9

let alpha = ["g", "h", "l", "r", "a", "b", "j", "p"]; // alpha is based on string comparison by default hence it is sorted by default
console.log(alpha.sort());

/// Iteration Methods ///

// Map Function
let prices = [100, 200, 300, 400, 500, 600];
let new_p = prices.map((p) => {
  return p * 2;
});

console.log(new_p);

// Filter Function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let num_p = numbers.filter((p) => {
  return p % 2 === 0;
});

console.log(num_p);

// Reduce Function
let total = numbers.reduce((acc, value) => {
  // There is an accumulator and a value
  return (acc += value);
});

console.log("The overall reduce total is : " + total);

// forEach Function
let c = 0;
numbers.forEach((n) => {
  console.log(`The ${c}th number is ` + n);
  c++;
});

// find function
let first = numbers.find((p) => p > 10); // It returns the first possible match
console.log(first);

// some function
let hasEven = numbers.some((p) => p % 2 != 0); // It returns true if the first possible match is found, else returns false
console.log(hasEven);

// every function
let largeNum = numbers.every((p) => p > 12); // It returns true only if all the numbers match the condition and false even if one number does not matches.
console.log(largeNum);

/// Rest Operator
function abc(a, b, ...c) {
  console.log(a, b, ...c);
}

abc("arka", "jyoti", "kar", "ma", "kar");

/// Spread Operator

//Questions

const arr = ["apple", "mango", "litchi"];
// console.log(arr[1]);

arr.push("mango");
arr.unshift("pineapple");
console.log(arr);

let fruits = ["Apple", "Orange"];
fruits.pop();
fruits.push("Kiwi");
console.log(fruits);

// A different use of splice

let colors = ["green", "red"];
colors.splice(1, 0, "yellow", "blue");
console.log(colors);

let names = ["Zara", "Arjun", "Mira", "Bhavya"];
names.sort();
names.reverse();
console.log(names);

let a = [2, 3, 4, 5, 6, 7, 8];
let sq = a.map((p) => {
  return p * p;
});
console.log(sq);

let n = [5, 12, 8, 20, 3];
let gr = n.filter((p) => {
  return p > 10;
});
console.log(gr);

let sum = n.reduce((acc, p) => {
  return (acc += p);
}, 0); // THIS 0 IS THE DEFAULT VALUE
console.log(sum);

let ar = [12, 15, 3, 8, 20];
let f = ar.find((p) => {
  return p > 10;
});
console.log(f);

// Use .some() to check if any student has got below 35 or not

let m = [45, 60, 28, 90];
let hasLess = m.some((p) => {
  return p > 35;
});
console.log(hasLess);

let hasE = a.every((p) => {
  return p % 2 === 0;
});
console.log(hasE);

// Destrcuture the array to get the first and lastname
let full = ["Harsh", "Sharma"];
let [fir, last] = full;
console.log("Firstname is " + fir + "  Last name is " + last);

//Merge two arrays using spread operators

let d = [1, 2];
let e = [3, 4];
let k = [...d, ...e];
console.log(k);

// Add India to the start of this array using spread

let countries = ["USA", "UK"];
let new_c = ["India", ...countries];
console.log(new_c);

// Clone this array properly not by reference

let arr2 = [1, 2, 3];
let arr3 = [...arr2];
console.log(arr3);
