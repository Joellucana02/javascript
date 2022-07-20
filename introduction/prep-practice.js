/* Good luck! */

/* appendToString
The function should return a new string which consists of the second string appended to the first string.

Examples:

appendToString("Hello", " World!"); // "Hello World!"
appendToString("Foo", "bar"); // "Foobar"
appendToString("bar", "Foo"); // "barFoo"
appendToString("", "test"); // "test"
appendToString("other test", ""); // "other test" */

function appendToString(a, b) {
  return a + b;
}

/* prependToString
Write a function called prependToString, which accepts two strings.

The function should return a new string with the second string prepended to the first string.

Examples:

prependToString('awesome', 'very') // 'veryawesome'
prependToString('world', 'hello ') // 'hello world'
prependToString('nothing', '') // 'nothing' */

function prependToString(a, b) {
  return b + a;
}

/* charAt
Write a function called charAt which accepts a string and an index (number) and returns the character at that index.

The function should return an empty string if the number is greater than the length of the string.

Do not use the built in charAt method

Examples:

charAt('awesome', 2) // 'e'
charAt('awesome', 12) // '' */

function charAt(str, inNum) {
  strCopy = str.split("");
  return strCopy[inNum] ? strCopy[inNum] : "";
}

/* stringIncludes
Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.

The function should return true if the first string includes the character, otherwise it should return false.

Do not use the built in String.includes() function!

Examples:

stringIncludes('awesome', 'e'); // true
stringIncludes('awesome', 'z'); // false */

function stringIncludes(str, str1) {
  let strCopy = str.split("");
  for (item of strCopy) {
    if (item == str1) {
      return true;
    }
  }
  return false;
}

/* stringIndexOf
Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.

The function should return the first index in the word at which the character exists or -1 if the character is not found.

Do not use the built in "string".indexOf() function!

Examples:

stringIndexOf('awesome', 'e') // 2
stringIndexOf('awesome', 'z') // -1 */

function stringIndexOf(str, str1) {
  let strCopy = str.split("");
  let counter = 0;
  for (item of strCopy) {
    if (item == str1) {
      return counter;
    }
    counter++;
  }
  return -1;
}

/* stringLastIndexOf
Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.

The function should return the last index at which the character exists or -1 if the character is not found.

Do not use the built in "string".lastIndexOf() function!

Examples:

stringLastIndexOf('awesome', 'e'); // 6
stringLastIndexOf('awesome', 'z'); // -1 */

function stringLastIndexOf(str, str1) {
  let strCopy = str.split("").reverse().join("").split("");
  let counter = strCopy.length - 1;
  for (item of strCopy) {
    if (item == str1) {
      return counter;
    }
    counter--;
  }
  return -1;
}

/* repeat
Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

Do not use the built in repeat method

Examples:

repeat('Matt', 3) // 'MattMattMatt'
repeat('Elie', 2) // 'ElieElie'
repeat('Michael', 0) // '' */

function repeat(str, num) {
  let newStr = " ";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

/* removeFromString
Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.

The function should return a new string with the characters removed.

Examples:

removeFromString('Elie', 2, 2) // 'El'
removeFromString('Elie', 0, 1) // 'lie'
removeFromString('Rithm School', 0, 6) // 'School'
removeFromString('Rithm School', 2, 4) // 'RiSchool'
removeFromString('Rithm School', 6, 400) // 'Rithm ' */

function removeFromString(str, num, numCh) {
  let strCopy = str.split("");
  strCopy.splice(num, numCh);
  return strCopy.join("");
}

/* includes
Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.

The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.

Examples:

includes([1, 2, 3], 1) // true
includes([1, 2, 3], 1, 2) // false
includes([1, 2, 3], 6) // false

includes({ 'a': 1, 'b': 2 }, 1) // true
includes({ 'a': 1, 'b': 2 }, 'a') // false

includes('abcd', 'b') // true
includes('abcd', 'e') // false
includes('abcd', 'a', 2) // false */

function includes(coll, val, ind = 0) {
  let collCopy = [];
  if (typeof coll == "object") {
    if (ind !== 0) {
      for (let i = ind - 1; i < coll.length; i++) {
        if (coll[i] == val) {
          return true;
        }
      }
      return false;
    }
    for (item in coll) {
      if (coll[item] == val) return true;
    }
  } else if (typeof coll == "string") {
    collCopy = coll.split("");
    if (ind !== 0) {
      for (let i = ind - 1; i < collCopy.length; i++) {
        if (collCopy[i] == val) {
          return true;
        }
      }
      return false;
    }
    for (item of collCopy) {
      if (item == val) {
        return true;
      }
    }
  }
  return false;
}

/* indexOf
Write a function called indexOf, which accepts an array and a number.

The function should return the first index at which the value exists or -1 if the value is not found.

Do not use the built in Array.indexOf() function!

Examples:

let arr = [5, 10, 15, 20];
indexOf(arr, 20); // 3

let arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2); // 1

let arr3 = [1, 2];
indexOf(arr3, 10); // -1 */

function indexOf(arr, num) {
  let counter = 0;
  for (item of arr) {
    if (item == num) {
      return counter;
    }
    counter++;
  }
  return -1;
}

/* lastIndexOf
Write a function called lastIndexOf, which accepts an array and a number.

The function should return the last index at which the value exists, or -1 if the value is not found.

Do not use the built in Array.lastIndexOf() function!

Examples:

lastIndexOf([1, 2, 3, 4], 2); // 1
lastIndexOf([1, 2, 3, 4, 2], 2); // 4
lastIndexOf([1, 2, 3, 4], 22); // -1 */

function lastIndexOf(arr, num) {
  let counter = arr.length - 1;
  let arrCopy = arr.reverse();
  for (item of arrCopy) {
    if (item == num) {
      return counter;
    }
    counter--;
  }
  return -1;
}

/* max
Write a function called max, which accepts an array and returns the highest value.

Do not use the built-in Math.max() function!

Examples:

max([5, 1, 4, 7, 1, 2]); // 7
max([3, 4, 12, 1, 8]); // 12
max([-1, 6, 3, 2.2, -10, -4]); // 6 */

function max(arr) {
  let highest = arr[0];
  for (item of arr) {
    if (item >= highest) {
      highest = item;
    }
  }
  return highest;
}

/* min
Write a function called min, which accepts an array of numbers and returns the lowest value.

Do note use the built-in Math.min() function!

Examples:

min([5, 1, 4, 7, 1, 2]); // 1
min([-1, 6, 3, 2.2, -10, -4]); // -10 */

function min(arr) {
  let highest = arr[0];
  for (item of arr) {
    if (item <= highest) {
      highest = item;
    }
  }
  return highest;
}

/* slice
Write a function called slice, which accepts an array, and two numbers.

The function should return a new array with the elements starting at the index of the first number and going until the index of the second number.

If a third parameter is not passed to the function, it should slice until the end of the array by default.

If the third parameter is greater than the length of the array, it should slice until the end of the array.

Do not use the built in Array.slice() function!

Examples:

slice([1, 2, 3, 4, 5], 0, 2); // [1, 2]
slice([1, 2, 3, 4, 5], 2, 4); // [3, 4]
slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
slice([1, 2, 3, 4, 5], 2, 10); // [3, 4, 5] */

function slice(arr, num = 0, num1 = -1) {
  let newArr = [];
  for (let i = num; i < arr.length; i++) {
    if (i == num1) {
      return newArr;
    }
    newArr.push(arr[i]);
  }
  return newArr;
}

/* countValues
Write a function called countValues which accepts an array and a number and returns the number of times that value appears in the array.

Examples:

countValues([4,1,4,2,3,4,4], 4) // 4
countValues([4,1,4,2,3,4,4], 100) // 0
countValues([], 1) // 0 */

function countValues(arr, num) {
  let counter = 0;
  for (item of arr) {
    if (item == num) {
      counter++;
    }
  }
  return counter;
}

/* keys
Write a function called keys, which accepts an object and returns an array of all of the keys in the object.

Do not use the built in Object.keys() function!

Examples:

let obj = { a: 1, b: 2, c: 3 };
keys(obj); // ["a", "b", "c"]

let obj2 = { first: 'Matt', last: 'Lane' };
keys(obj2); // ["first", "last"]

let obj3 = {};
keys(obj3); // [] */

function keys(obj) {
  let newArr = [];
  for (item in obj) {
    newArr.push(item);
  }
  return newArr;
}

/* values
Write a function called values, which accepts an object and returns an array of all of the values in the object.

Do not use the built in Object.values() function!

Examples:

let obj = { a: 1, b: 2, c: 3 };
values(obj); // [1,2,3]

let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
values(obj2); // ["Matt", "Lane", true]

let obj3 = {};
values(obj3); // [] */

function keys(obj) {
  let newArr = [];
  for (item in obj) {
    newArr.push(obj[item]);
  }
  return newArr;
}

/* squareEvenNumbers
Write a function called squareEvenNumbers which accepts an array and returns the sum of the squares of all the even numbers in the array.

Examples:

squareEvenNumbers([1, 2, 3, 4, 5]); // 20
squareEvenNumbers([1, 3, 5, 7]); // 0
squareEvenNumbers([5, 6, 7]); // 36 */

function squareEvenNumbers(arr) {
  let total = 0;
  for (item of arr) {
    if (item % 2 == 0) {
      total += item * item;
    }
  }
  return total;
}

/* entries
Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.

In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.

Do not use the built in Object.entries() function!

Examples:

let obj = { a: 1, b: 2, c: 3 };
entries(obj);
/ [["a",1], ["b",2], ["c",3]]

let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
entries(obj2);
/ [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

let obj3 = {};
entries(obj3); // [] */

function entries(obj) {
  let newArr = [];
  for (item in obj) {
    newArr.push([item, obj[item]]);
  }
  return newArr;
}

/* multiples
Implement a function called multiples that accepts two numbers: x and n.

The function should return the first n multiples of the number x.

Assume that x is a positive integer.

Examples:

multiples(3, 4) // [3, 6, 9, 12]
multiples(2, 5) // [2, 4, 6, 8, 10] */

function multiples(n, x) {
  let newArr = [];
  for (let i = n; i <= n * x; i += n) {
    newArr.push(i);
  }
  return newArr;
}

/* pluck
Write a function called pluck, which takes an array of objects and the name of a key.

The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

Examples:

pluck([
  { name: "Tim" }, { name: "Matt" }, { name: "Elie" }],
 'name'
)
/ ["Tim", "Matt", "Elie"]

pluck(
  [{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],
 'isBoatOwner'
)
/ [true, false, undefined] */

function pluck(arr, keyName) {
  let newArr = [];
  for (item of arr) {
    for (it in item) {
      if (it == keyName) {
        newArr.push(item[it]);
      }
      if (!(keyName in item)) {
        newArr.push(undefined);
      }
    }
  }
  return newArr;
}

/* twoHighest
Write a function called twoHighest that takes an array of numbers as its argument and returns the two highest numbers within the array.

The returned value should be an array in the following format: [secondHighest, highest]

The order of the numbers passed in could be any order.

Do not use the build in sort() method - the tests will fail!

Examples:

twoHighest([1, 2, 10, 8]); // [8, 10]
twoHighest([6, 1, 9, 10, 4]); // [9,10]
twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]
twoHighest([1, 2, 2]) // [2, 2]; */

function twoHighest(array) {
  let newArr = [];
  function max(arr) {
    let highest = arr[0];
    for (item of arr) {
      if (item >= highest) {
        highest = item;
      }
    }
    return highest;
  }

  console.log(array.indexOf(max(array)));
  newArr.push(max(array));
  array.splice(array.indexOf(max(array)), 1);
  newArr.unshift(max(array));

  return newArr;
}

/* minMaxKeyInObject
Write a function called minMaxKeyInObject that accepts an object with numeric keys.*

The function should return an array with the following format: [lowestKey, highestKey]

Examples:

minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
/ [1, 10]
minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
/ [1, 4] */

function minMaxKeyInObject(obj) {
  let arr = [];
  for (item in obj) {
    arr.push(item * 1);
  }
  console.log(arr);
  return [min(arr), max(arr)];
}

/* stringFromObject
Write a function called stringFromObject that generates a string from an object's key/value pairs.

The format should be "key = value, key = value".

Each key/value pair should be separated by a comma and space except for the last pair.

Examples:

stringFromObject({ a: 1, b: '2' });
/ "a = 1, b = 2"


stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
/ "name = Elie, job = Instructor, isCatOwner = false"


stringFromObject({}); // "" */

function stringFromObject(obj) {
  let arr = [];
  for (item in obj) {
    arr.push(`${item} = ${obj[item]}`);
  }
  return arr.join(",");
}

/* countNumbers
Write a function called countNumbers, which accepts an array of strings. The function should return a count of the number of strings in the array that can be successfully converted into a number. For example, the string "1" can be successfully converted to the number 1, but the string "hello" cannot be converted into a number.

Examples:

countNumbers(['a','b','3','awesome','4']); // 2
countNumbers(['32', '55', 'awesome', 'test', '100']); // 3
countNumbers([]); // 0
countNumbers(['4','1','0','NaN']); // 3
countNumbers(['7', '12', 'a', '', '6', '8', ' ']); // 4 */

function countNumbers(arr) {
  let counter = 0;
  for (item of arr) {
    if (
      typeof (item * 1) == "number" &&
      !isNaN(item * 1) &&
      item.split(" ").join("").length > 0
    ) {
      counter++;
    }
  }
  return counter;
}

/* removeVowels
Write a function called removeVowels which will accept a string and return a new string with all the vowels removed. You should not consider "y" to be a vowel.

Examples:

removeVowels("Hello!"); // "Hll!"
removeVowels("Tomatoes"); // "Tmts"
removeVowels("Reverse Vowels In The String"); // "Rvrs Vwls n Th Strng"
removeVowels("aeiou"); // ""
removeVowels("why try, shy fly?"); // "why try, shy fly?" */

function removeVowels(str) {
  let strArr = [];
  for (item of str.toLowerCase().split("")) {
    console.log(item);
    if (
      item !== "a" &&
      item !== "e" &&
      item !== "i" &&
      item !== "o" &&
      item !== "u"
    ) {
      strArr.push(item);
    }
  }
  return strArr.join("");
}

/* findTheDuplicate
Write a function called findTheDuplicate which accepts an array of numbers containing a single duplicate. The function returns the number which is a duplicate or undefined if there are no duplicates.

Examples:

findTheDuplicate([1,2,1,4,3,12]) // 1
findTheDuplicate([6,1,9,5,3,4,9]) // 9
findTheDuplicate([2,1,3,4]) // undefined */

function findTheDuplicate(arr) {
  for (item of arr) {
    for (let i = arr.indexOf(item) + 1; i < arr.length; i++) {
      if (item === arr[i]) {
        return item;
      }
    }
  }
  return undefined;
}

/* totalCaps
Write a function called totalCaps, which accepts an array of strings and returns the total number of capitals in each of the strings. Do not convert the array into a string.

Examples:

totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]) // 8
totalCaps(["Elie", "Matt", "Tim"]) // 3
totalCaps(["hello", "world"]) // 0 */

function totalCaps(arr) {
  let counter = 0;
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (item of arr) {
    for (it of item.split("")) {
      for (le of letters.split("")) {
        if (it === le) {
          counter++;
        }
      }
    }
  }
  return counter;
}

/* separate
Dogs don't get along with cats, and cats don't get along with dogs.

What they both have in common is that they don't get along with water (baths).

Given an array of 'dogs', 'cats', and 'water', write a function called separate, which returns a new array so that the dogs are separated from the cats by water. Make sure that cats always come first in the array.

You can assume that the array will always at least three elements, and that there'll always be at least one dog, one cat, and one water to work with.

Examples:

separate(['dog','cat','water']) // ['cat','water','dog']

separate(['dog','cat','water','cat']) // ['cat', 'cat', 'water', 'dog'])

separate(['cat','cat','water','dog','water','cat','water','dog'])

/ ['cat','cat','cat','water','water','water','dog','dog']

separate(['cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat','cat',
    'dog','water','water','water','water','water',
    'water','water','water','water','water','water',
    'water','water','water'])

    ['cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat',
    'cat','cat','cat','cat','cat','cat','cat',
    'water','water','water','water','water',
    'water','water','water','water','water','water',
    'water','water','water', 'dog']
 */

function separate(arr) {
  let newArr = [];
  let newArr1 = [];
  let newArr2 = [];
  for (item of arr) {
    if (item == "cat") {
      newArr.push(item);
    } else if (item == "water") {
      newArr1.push(item);
    } else {
      newArr2.push(item);
    }
  }
  return newArr.concat(newArr1).concat(newArr2);
}

/* isAlt
Create a function isAlt that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

Examples:

isAlt("amazon") // true
isAlt("apple") // false
isAlt("banana") // true */

function isAlt(str) {
  let strArr = str.split("");
  let counter = 1;
  for (let i = 0; i < strArr.length; i++) {
    if (
      strArr[i] == "a" ||
      strArr[i] == "e" ||
      strArr[i] == "i" ||
      strArr[i] == "o" ||
      strArr[i] == "u"
    ) {
      if (
        strArr[i + 2] == "a" ||
        strArr[i + 2] == "e" ||
        strArr[i + 2] == "i" ||
        strArr[i + 2] == "o" ||
        strArr[i + 2] == "u"
      ) {
        counter++;
        console.log(counter);
      }
    }
  }
  return strArr.length / 2 == counter;
}
