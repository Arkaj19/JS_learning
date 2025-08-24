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
