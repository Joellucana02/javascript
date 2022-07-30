/* Constructors Exercise */

/* Answer the following questions and make the tests pass.

What is the purpose of a constructor function?

/ its principal use is to contructor an object / 

What does the new keyword do?

/ Creates a context for the function being called, uses the keyword new to make this happen /

What does the keyword this refer to inside of a constructor function?

/ refers to the new context that will be create / 

What is a class? What is an instance?

/ a class is a blueprint to create objects, an instance is the call of a constructor to make an object /  

Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.

Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number

Refactor the following code so that there is no duplication inside the Child function. */

/* function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
} */
function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.multiplyFavoriteNumber = function (a) {
    return a * this.favoriteNumber;
  };
}

function Parent(firstName, lastName, favoriteColor, favoriteFood) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood) {
  Parent.call(this, firstName, lastName, favoriteColor, favoriteFood);
}
let pedro = new Child("pedro", "diaz", "verde", "manzanas");
