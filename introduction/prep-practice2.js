/* calculateMonthlyOrders
Write a function called calculateMonthlyOrders that accepts an array of objects. Each object has one or more properties for months in the year and those properties each have a value which is a number. The function should return the sum of all the values of all the properties in all the objects.

Examples:

let orders = [{
  February: 1,
  March: 2,
  April: 2
},
{
  April: 1,
  May: 2,
  June: 2
}]

calculateMonthlyOrders(orders) // 10;

let orders = [{
  January: 100,
  February: 200,
  March: 300,
  April: 400,
  May: 500,
  June: 600,
  July: 700,
  August: 800,
  September: 900,
  October: 1000,
  November: 1100,
  December: 1200,
},
{
  January: 200,
  February: 300,
  March: 400,
  April: 500,
  May: 600,
  June: 700,
  July: 800,
  August: 900,
  September: 1000,
  October: 1100,
  November: 1200,
  December: 1300,
}];

calculateMonthlyOrders(orders); // 16800 */

function calculateMonthlyOrders(arr) {
  let total = 0;
  for (item of arr) {
    for (it in item) {
      total += item[it];
    }
  }
  return total;
}

/* collectOddsAndEvens
Write a function called collectOddsAndEvens that accepts an array of positive integers and returns an object with the count of odd numbers and the count of even numbers. The keys in the object should be "odd" and "even".

Examples:

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]);
/ { odd: 5, even: 4, });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
/ { odd: 5, even: 5, });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
/ { odd: 6, even: 5,});

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
/ { odd: 6, even: 6 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
/ { odd: 7, even: 6 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
/ { odd: 7, even: 7 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
/ { odd: 8, even: 7 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
/ { odd: 8, even: 8 }); */

function collectOddsAndEvens(arr) {
  let countEven = 0;
  for (item of arr) {
    if (item % 2 == 0) {
      countEven++;
    }
  }
  return { odd: arr.length - countEven, even: countEven };
}

/* countIfHasValue
Write a function called countIfHasValue which accepts an object where all of the values are arrays. It also accepts a numeric value that is being searched for. The function should return the number of arrays in which the searched-for value appears.

Examples:

let obj = {
  a: [1, 10, 3],
  b: [4, 1, 7],
  c: [7, 7, 7],
  d: [10, 7, 12]
};
countIfHasValue(obj, 1) // 2
countIfHasValue(obj, 7) // 3
countIfHasValue(obj, 10) // 2
countIfHasValue(obj, 13) // 0 */

function countIfHasValue(obj, val) {
  let countVal = 0;
  for (item in obj) {
    let cond = 0;
    for (it of obj[item]) {
      if (it == val && cond == 0) {
        countVal++;
        cond = 1;
      }
    }
  }
  return countVal;
}

/* countValidNumsInString
Write a function called countValidNumsInString which counts the number of valid numbers in a string.

Examples:

countValidNumsInString("") // 0
countValidNumsInString("1") // 1
countValidNumsInString("12") // 2
countValidNumsInString("12abc3") // 3
countValidNumsInString("1s2d3dsadas4") // 4
countValidNumsInString("512,3,4!?!") // 5
countValidNumsInString("123456") // 6 */

function countValidNumsInString(str) {
  let counter = 0;
  for (item of str.split("")) {
    if (typeof (item * 1) === "number" && !isNaN(item * 1)) {
      counter++;
    }
  }
  return counter;
}

/* divideObject
Write a function called divideObject that accepts an object where the values are either strings or numbers. The function should return an array of arrays. The first subarray should contain a total of all of the numbers and the second subarray should contain a number which is the total of all the characters of all the strings.

Examples:

divideObject({
  first: "hi",
  second: "hello",
  third: "hey",
  fourth: 2,
  fifth: "fun",
  sixth: 10,
})
/ [ [12], [13] ] */

function divideObject(obj) {
  let numbers = 0;
  let characters = 0;
  for (item in obj) {
    if (typeof obj[item] == "string") {
      for (it of obj[item].split("")) {
        characters++;
      }
    } else if (typeof obj[item] == "number") {
      numbers += obj[item];
    }
  }
  return [[numbers], [characters]];
}

/* findFirstAndLastIndex
Write a function called findFirstAndLastIndex that should accept an array and a number and return a new array where the first index is the index where that number is first found and the second index is the index where that number is last found. If the number does not exist at least twice, the function should return -1

Examples:

findFirstAndLastIndex([1, 2, 3, 4, 5], 3) // -1
findFirstAndLastIndex([1, 2, 2, 2, 5], 12) // -1
findFirstAndLastIndex([1, 2, 2, 2, 5], 2) // [1, 3] */

function findFirstAndLastIndex(arr, num) {
  let first = 0;
  let last = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      first = i;
      break;
    }
  }
  for (let i = arr.length - 1; -1 < i; i--) {
    if (arr[i] == num) {
      last = i;
      break;
    }
  }
  return first == last ? -1 : [first, last];
}

/* findFirstMove
Write a function called findFirstMove. This function accepts an array of arrays of moves and a move. It should return an array with the index of the first move in the array of arrays of moves. If the move is not present in the moves array, the function should return -1.

Examples:

let moves = [
  ["a", "b", "c"],
  ["d", "a", "f"],
  ["g", "h", "h"],
];

findFirstMove(moves, "a"); // [0, 0]
findFirstMove(moves, "h"); // [2, 1]
findFirstMove(moves, "z"); // -1 */

function findFirstMove(arr, ch) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (item of arr[i]) {
      if (item === ch && newArr.length !== 2) {
        newArr.push(i);
        newArr.push(arr[i].indexOf(item));
      }
    }
  }
  return newArr.length == 0 ? -1 : newArr;
}

/* findHighestPriorityTodo
Write a function called findHighestPriorityTodo which accepts an array of objects, each of which has a 'priority' property as well as a 'task' property. The function should return an array where the first index is the name of the highest priority task and the second index is the priority rating of that same task.

Examples:

let todos = [{
  task: "Eat",
  priority: 18,
},
{
  task: "Sleep",
  priority: 22,
},
{
  task: "Solve problems",
  priority: 17,
}];

findHighestPriorityTodo(todos); // ["Sleep", 22]

let todos = [{
  task: "Task 1",
  priority: 1,
},
{
  task: "Task 2",
  priority: 2,
},
{
  task: "Task 3",
  priority: 3,
}];

findHighestPriorityTodo(todos); // ["Task 3", 3] */

function findHighestPriorityTodo(arr) {
  let task = "";
  let prio = 0;
  for (item of arr) {
    if (item["priority"] > prio) {
      prio = item["priority"];
      task = item["task"];
    }
  }
  return [task, prio];
}

/* inMatrix
Write a function called inMatrix which accepts an array of arrays and a value. The function should return true if that value is in the matrix, and false if it is not.

Examples:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
inMatrix(matrix, 5) // true
inMatrix(matrix, 8) // true
inMatrix(matrix, 10) // false */

function inMatrix(arr, val) {
  for (it of arr) {
    for (item of it) {
      if (item === val) {
        return true;
      }
    }
  }
  return false;
}

/* replaceAfter
Write a function called replaceAfter that accepts an array and an index. It should remove two elements starting at that index and add the strings "Hello", "world" in their places. The function should return the altered array.

Examples:

replaceAfter(["1", "2", "a", "b", "3", "4"], 2)
/ ["1", "2", "Hello", "world", "3", "4"]

replaceAfter(["a", "b", "c"], 0)
/ ["Hello", "world", "c"] */

/*======================================= 
function replaceAfter(arr, ind) {
  arr.splice(ind, 2, "hello", "world");
  return arr;
} 
========================================*/

function replaceAfter(arr, ind) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (ind == i) {
      newArr.push("hello");
      newArr.push("world");
      i += 2;
    }
    newArr.push(arr[i]);
  }
  return newArr;
}

/* reverseValues
Write a function called reverseValues, which accepts an array of numbers, and iterates through it. As it traverses the array, if the value encountered is an even number, skip it AND skip the next two numbers, as well. Anything that isn't skipped should be added to a new array, which has all non-skipped numbers in reverse order of the original array. Return this new array.

Examples:

reverseValues([1, 1, 3, 3, 2]) // [3, 3, 1, 1]
reverseValues([1, 3, 5, 7]) // [7, 5, 3, 1]
reverseValues([1, 3, 4, 7]) // [3, 1]
reverseValues([11, 13, 15, 20, 1, 1]) // [15, 13, 11]
reverseValues([4, 5, 1, 1, 2, 1, 1]) // [1]
reverseValues([2, 2, 2]) // [] */

function reverseValues(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      i += 3;
    }
    if (i < arr.length) newArr.push(arr[i]);
  }
  return newArr.reverse();
}

/* robotInstructions
Write a function called robotInstructions which accepts an array of moves. The options for the moves are "U", "D", "L", "R". The function should return an object with one key for each move with their values being the total number of times each move appears.

Examples:

robotInstructions(["U", "D", "L", "R"])
/ { "U": 1, "D": 1, "L": 1, "R": 1 })

robotInstructions(
  ["U", "D", "L", "R", "U", "D", "L", "R", "U", "D", "L", "R"]
)
/ { "U": 3, "D": 3, "L": 3, "R": 3 }) */

function robotInstructions(arr) {
  obj = {
    U: 0,
    D: 0,
    L: 0,
    R: 0,
  };
  for (item of arr) {
    for (k in obj) {
      if (k == item) {
        obj[k]++;
      }
    }
  }
  return obj;
}

/* scheduleCheck
Write a function called scheduleCheck which accepts two objects which have a key for each day of the week and a value that is either true or false. The function should return the number of days of the week that both objects have a value of true for.

Examples:

let schedule1 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: true,
};
let schedule2 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: true,
};

scheduleCheck(schedule1, schedule2) // 7;

let schedule1 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: true,
};
let schedule2 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: false,
  Sunday: true,
};

scheduleCheck(schedule1, schedule2) // 6; */

function scheduleCheck(obj, obj1) {
  let counter = 0;
  let days = "Monday Tuesday Wednesday Thursday Friday Saturday Sunday";
  days = days.split(" ");
  console.log(days);
  for (let i = 0; i < 7; i++) {
    if (obj[days[i]] === obj1[days[i]]) {
      counter++;
    }
  }
  return counter;
}

/* separateLanguages
Write a function called separateLanguages which which takes an array of strings and returns an object with the following keys: "python", "javascript", "other". The values for the keys of "python" and "javascript" should be the number of times those strings appear. The value of "other" should be an array of all of the other values in the array.

Examples:

separateLanguages(["python", "python", "python", "javascript", "c++"])
/*
{
  python: 3,
  javascript: 1,
  other: ["c++"],
}
*
  })
separateLanguages(["python", "python", "spanish", "javascript"])
/
  python: 2,
  javascript: 1,
  other: ["spanish"],
}
/
separateLanguages(["greek", "french", "yoruba", "python"])
/
{
  python: 1,
  javascript: 0,
  other: ["greek", "french", "yoruba"],
}
 */

function separateLanguages(arr) {
  let lan = { python: 0, javascript: 0, other: [] };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "javascript") {
      lan["javascript"]++;
    } else if (arr[i] == "python") {
      lan["python"]++;
    } else {
      lan["other"].push(arr[i]);
    }
  }
  return lan;
}

/* skipVowels
Write a function called skipVowels that accepts a string an returns an array. The function should iterate through the string and if it encounters a vowel, it should skip the current character and the next character. Otherwise, it should add that current character to the array.

Examples:

skipVowels("hello") // ["h", "l"]
skipVowels("much fun") // ["m", "h", " ", "f"]
skipVowels("aaaa") // [] */

function skipVowels(str) {
  str = str.toLowerCase().split("");
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      i += 2;
    }
    if (
      i < str.length &&
      str[i] !== "a" &&
      str[i] !== "e" &&
      str[i] !== "i" &&
      str[i] !== "o" &&
      str[i] !== "u"
    ) {
      newArr.push(str[i]);
    }
  }
  return newArr;
}
