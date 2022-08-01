/* Exercises */

/* Part II */

/* countNumbers
Write a function called countNumbers which accepts a string of numbers and returns the count of numbers between 0 and 9.

countNumbers("321321dsadsa930-29d132b13a") // 16
countNumbers("this is so wonderful") // 0
countNumbers("this is so 1234") // 4 */

function countNumbers(str) {
  let matches = [];
  matches = str.match(/[0-9]/g) ? str.match(/[0-9]/g) : [];
  return matches.length;
}

/* capitalSentence
Write a function called capitalSentence which accepts a string and returns another string with all the capital letters joined together.

capitalSentence("The Cat In The Hat") // "TCITH"
capitalSentence("And I Think to Myself What a Wonderful World") // "AITMWWW" */

function capitalSentence(str) {
  let matches = "";
  matches = str.match(/[A-Z]/g);
  return matches.join("");
}

/* isValidPassword
Write a function caled isValidPassword, which accepts a string. If the string is longer than 7 characters and includes at least one special character (!,@,#, or $) , the function should return true. Otherwise, return false

isValidPassword('TacoCat') // false
isValidPassword('foo') // false
isValidPassword('awesome!') // true
isValidPassword('win!@') // false */

function isValidPassword(str) {
  let special = [];
  special = str.match(/[!@#$\d]/g);
  if (special) {
    return str.split("").length > 7;
  }
  return false;
}
