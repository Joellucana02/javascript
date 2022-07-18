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
