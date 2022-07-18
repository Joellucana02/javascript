/* For each of the exercises below, assume you are starting with the following people array. */
/* let people = ["Greg", "Mary", "Devon", "James"]; */

/* 

Using a loop, iterate through this array and console.log all of the people.

Write the command to remove "Greg" from the array.

Write the command to remove "James" from the array.

Write the command to add "Matt" to the front of the array.

Write the command to add your name to the end of the array.

Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".

Write the command that gives the indexOf where "Mary" is located.

Write the command that gives the indexOf where "Foo" is located (this should return -1).

Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].

Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
*/

let people = ["Greg", "Mary", "Devon", "James"];

for (let ite of people) {
  console.log(ite);
}
people.shift();
people.pop();
people.unshift("Matt");
people.push("Joel");
for (let ite of people) {
  console.log(ite);
  if (ite === "Mary") {
    break;
  }
}
peopleCopy = people.slice(2);
console.log(peopleCopy);
people.indexOf("Mary");
people.indexOf("Foo");
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
let withBob = people.concat("Bob");
console.log(withBob);
