/* 
// ✅parseInt(): This function converts a string to an integer.

let numString = "42";
const test =Number(numString)
let num = parseInt(numString);
console.log(test); // Output: 42




// ✅parseFloat(): Similar to parseInt(), parseFloat() converts a string to a floating - point number.

let floatString = "3.14";
const test = Number(floatString)
let floatNum = parseFloat(floatString);
console.log(floatNum); // Output: 3.14




// ✅toString(): This function converts a value to a string.

let number = 42;
let stringNum = number.toString()
console.log(stringNum); // Output: "42"



// ✅toUpperCase() and toLowerCase(): These functions convert a string to uppercase and lowercase, respectively.
 
let message = "Hello, World!";
let uppercaseMessage =message.toUpperCase()
console.log(uppercaseMessage); // Output: "HELLO, WORLD!"

let lowercaseMessage = message.toLowerCase();
console.log(lowercaseMessage); // Output: "hello, world!"




//✅ length: The length property returns the length of a string or the number of elements in an array.

let greeting = "Hello!";
console.log(greeting.length); // Output: 6

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // Output: 5



// ✅push() and pop(): These functions add and remove elements from the end of an array, respectively.

let fruits = ["apple", "banana", "orange"];
fruits.push("grape");
fruits.push("litchi");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

let removedFruit = fruits.pop();
console.log(removedFruit); // Output: "grape"
console.log(fruits); // Output: ["apple", "banana", "orange"]



// ✅indexOf() and lastIndexOf(): These functions search for a specified value in an array and return the index of the first and last occurrence, respectively.

let numbers = [1, 2, 3, 2, 4, 2];
console.log(numbers.indexOf(2)); // Output: 1
console.log(numbers.lastIndexOf(2)); // Output: 5



// ✅slice(): This function returns a shallow copy of a portion of an array into a new array.

let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // Output: ["banana", "orange", "grape"]


// ✅join(): The join() function creates and returns a new string by concatenating all the elements of an array, separated by a specified separator.


let fruits = ["apple", "banana", "orange"];
let joinedString = fruits.join(" , ");
console.log(joinedString); // Output: "apple, banana, orange"




// ✅Math.random(): This function generates a random number between 0(inclusive) and 1(exclusive).

let randomNumber = Math.random();
console.log(randomNumber); // Output: a random number between 0 and 1


// Returns a random integer from 0 to 9:
let randomNumber= Math.floor(Math.random() * 7);
console.log(randomNumber);

// Math.PI returns the ratio of a circle's circumference to its diameter:

const rannum = Math.PI;
console.log(rannum);



// ✅setTimeout(): This function calls a function or evaluates an expression after a specified delay(in milliseconds).

function greet() {
    console.log("Hello!");
}

setTimeout(greet, 2000); // Output: "Hello!" displayed after a 2-second delay

 


// ✅toFixed(): This function formats a number to a specified number of decimal places and returns it as a string.

let number = 3.14159;
let formattedNumber = number.toFixed(3);
console.log(formattedNumber); // Output: "3.141"


// Math.max() and Math.min(): These functions return the maximum and minimum value from a list of numbers, respectively.

let maxNumber = Math.max(5, 8, 2, 10);
console.log(maxNumber); // Output: 10

let minNumber = Math.min(5, 8, 2, 10);
console.log(minNumber); // Output: 2



// ✅Array.isArray(): This function checks if a value is an array and returns true or false.

let array = [1, 2, 3];
console.log(Array.isArray(array)); // Output: true

let string = "Hello";
console.log(Array.isArray(string)); // Output: false



// ✅Math.pow(): This function returns the base raised to the exponent power.

let result = Math.pow(2, 4);
console.log(result); // Output: 8



//✅ charAt(): This function returns the character at a specified index in a string.

let message = "Hello";
let character = message.charAt(3);
console.log(character); // Output: "e"



// ✅Array.prototype.forEach(): This function executes a provided callback function once for each element in an array.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
    console.log(number);
});



//     Now, let's dive into the JSON.parse() function. It is used to parse a JSON string and convert it into a JavaScript object.

// Here's an example:

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const person = JSON.parse(jsonString);

console.log(person.name);  // Output: John
console.log(person.age);   // Output: 30
console.log(person.city);  // Output: New York



//  ✅   Now, let's move on to the JSON.stringify() function. It is used to convert a JavaScript object into a JSON string.

// Here's an example:


const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const jsonString = JSON.stringify(person);
console.log(jsonString);



// ✅setTimeout() is a function in JavaScript that allows you to schedule a single execution of a function after a specified delay in milliseconds.Here's the syntax:


// setTimeout(function, delay, param1, param2, ...)
// function is the function to be executed.
// delay is the time in milliseconds to wait before executing the function.
// param1, param2, and so on are optional parameters that can be passed to the function.
// Here's an example that demonstrates the usage of setTimeout():


function greet(name) {
    console.log(`Hello, ${name}!`);
}

setTimeout(greet, 2000, 'John');




// ✅setInterval() is similar to setTimeout(), but it repeatedly executes a function at a specified interval.The syntax is as follows:


// setInterval(function, delay, param1, param2, ...)
// function is the function to be executed repeatedly.
// delay is the time in milliseconds between each execution of the function.
// param1, param2, and so on are optional parameters that can be passed to the function.
// Here's an example that demonstrates the usage of setInterval():


let count = 0;

function incrementCounter() {
    count++;
    console.log(`Counter: ${count}`);
}

let intervalId = setInterval(incrementCounter, 1000);



// To stop the execution of a function scheduled using setInterval(), you can use the clearInterval() function. Here's the syntax:

// ✅clearInterval(intervalId);
// intervalId is the ID returned by setInterval() when creating the interval.
//     Here's an example that demonstrates the usage of clearInterval():


let count = 0;

function incrementCounter() {
    count++;
    console.log(`Counter: ${count}`);

    if (count >= 5) {
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(incrementCounter, 1000);

// In this example, the incrementCounter function is executed every second until the count variable reaches 5. At that point, clearInterval() is called with the intervalId to stop further execution of the function.





// ✅find(): The find() function is used to search through an array and return the first element that satisfies a provided condition.Here's an example:

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumber = numbers.find((num) => num % 2 === 0);
console.log(evenNumber); // Output: 2





// ✅filter(): The filter() function creates a new array with all elements that pass a given condition.Here's an example:

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// The filter() function filters out the odd numbers from the numbers array and returns a new array with only the even numbers.





// ✅map(): The map() function is used to create a new array by applying a transformation to each element of an existing array.Here's an example:

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map( num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// The map() function multiplies each number in the numbers array by 2 and returns a new array with the transformed values.





// ✅reduce(): The reduce() function is used to accumulate the elements of an array into a single value by applying a function that reduces it.Here's an example:

const numbers = [1, 2, 3, 4, 5, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// In the example, the reduce() function adds up all the numbers in the numbers array and returns the sum.



// ✅findIndex(): The findIndex() function returns the index of the first element in an array that satisfies a given condition.Here's an example:

const numbers = [3, 3, 4, 5];

const evenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(evenIndex); // Output: 1

// In the example, the findIndex() function finds the index of the first even number in the numbers array.
*/

// sort(): The sort() function is used to sort the elements of an array in place.Here's an example:
// javascript

const numbers = [8, 3, 1, 4, 2, 5];

numbers.sort();
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// The sort() function sorts the numbers array in ascending order.
