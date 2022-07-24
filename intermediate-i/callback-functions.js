/* Exercises  */

function each(arr, fn) {
  // put your code inside here!
  for (item of arr) {
    fn(item);
  }
}
each([1, 2, 3, 4], function (val) {
  console.log(val);
});
// Here is what should be output if you wrote the function correctly

// 1
// 2
// 3
// 4

/* Write a function called map which accepts two parameters: an array and a callback. The map function should return a new array with the result of each value being passed to the callback function. Here's an example:
map([1,2,3,4], function(val){
    return val * 2;
}); 

/ [2,4,6,8] */

function map(arr, fn) {
  let newArr = [];
  for (item of arr) {
    newArr.push(fn(item));
  }
  return newArr;
}
map([1, 2, 3, 4], function (val) {
  return val * 2;
});

/* Write a function called reject which accepts two parameters an array and a callback. The function should return a new array with all of the values that do not return true to the callback. Here are two examples:
reject([1,2,3,4], function(val){
    return val > 2;
}); /
/ [1,2]

reject([2,3,4,5], function(val){
    return val % 2 === 0;
}); /
/ [3,5] */

function reject(arr, fn) {
  let newArr = [];
  for (item of arr) {
    if (!fn(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}

/* Write a function called createCounter. This function should contain a variable count that is initialized to 0. This function should return another function that when invoked, increments the counter by 1 and returns the count variable. You should be able to create multiple counters with the createCounter function and they should all have their own private variable called count.

let firstCounter = createCounter();

firstCounter(); // 1
firstCounter(); // 2
firstCounter(); // 3
firstCounter(); // 4

let secondCounter = createCounter();

secondCounter(); // 1
secondCounter(); // 2
secondCounter(); // 3

firstCounter(); // 5
firstCounter(); // 6

secondCounter(); // 4 */

function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

/* 
{ Higher Order Functions, Timers, and Closures Exercises. }
*/

/* countdown
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.
countDown(4);
/ 3
/ 2
/ 1
/ "DONE!" */

function countdown(num) {
  let timerId = setInterval(function () {
    console.log(num--);
    console.log(timerId);
    if (num == 0) {
      clearInterval(timerId);
      console.log("DONE!");
    }
  }, 1000);
}

/* randomGame
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75. */

function randomGame() {
  let counter = 0;
  let timerId = setInterval(function () {
    let random = Math.random();
    console.log(random);
    if (random > 0.75) {
      clearInterval(timerId);
      console.log(counter);
    }
    counter++;
  }, 1000);
}

/* isEven
Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not
isEven(2); // true
isEven(3); // false */

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

/* isOdd
Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not
isOdd(3); // true
isOdd(14); // false */

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

/* isPrime
Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false
isPrime(8); // false
isPrime(17); // true */

function isPrime(num) {
  counter = 0;
  if (num > 1) {
    for (let i = num; i > 1; i--) {
      if (num % i == 0) {
        counter++;
      }
    }
  }
  console.log(counter);
  return counter == 1 ? true : false;
}

/* numberFact
Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it
numberFact(59,isEven); // false
numberFact(59,isOdd); // true
numberFact(59,isPrime); // true */

function numberFact(num, fn) {
  return fn(num);
}

/* find
Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.
find([8,11,4,27], function(val){return val >= 10}); // 11
find([8,11,4,27], function(val){return val === 5}); // undefined */

function find(arr, fn) {
  for (item of arr) {
    if (fn(item)) {
      return item;
    }
  }
}

/* findIndex
Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.
/ returns 1 (index of the first value greater than or equal to 10)
findIndex([8,11,4,27], function(val){return val >= 10});

findIndex([8,11,4,27], function(val){return val === 7}); // undefined */

function findIndex(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return i;
    }
  }
}

/* specialMultiply
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.
specialMultiply(3,4); // 12
specialMultiply(3)(4); // 12
specialMultiply(3); // returns a function  */

function specialMultiply(a, b) {
  if (arguments.length == 2) {
    return a * b;
  }
  return function (ba) {
    return a * ba;
  };
}
