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
