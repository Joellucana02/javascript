/* { Nested Arrays Exercises. }

Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.
rotate([1,2,3], 1) // [3,1,2]
rotate([1,2,3], 2) // [2,3,1]
rotate([1,2,3], 3) // [1,2,3] */

function rotate(arr, num) {
  let j = 0;
  while (j < num) {
    arr.unshift(arr.pop());
    j++;
  }
  return arr;
}

/* Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".
makeXOGrid(1,4) 

/
[["X","O","X","O"]]
/

makeXOGrid(3,2) 

/
[["X","O"],["X","O"],["X","O"]]
/

makeXOGrid(3,3) 
/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/
 */

function makeXOGrid(rows, columns) {
  let newArr = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 1; j < columns + 1; j++) {
      if (j % 2 == 0) {
        row.push("O");
      } else {
        row.push("X");
      }
    }
    newArr.push(row);
  }
  return newArr;
}
