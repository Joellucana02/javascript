/* Prototypes Exercise */

/* 
Create a constructor function for a Vehicle: every object created from this constructor should have make, model, and year property. Each object should also have a property called isRunning, which should be set to false 

Every object create from the Vehicle constructor should have a function called turnOn, which changes the isRunning property to true

Every object create from the Vehicle constructor should have a function called turnOff, which changes the isRunning property to false

Every object create from the Vehicle constructor should have a method called honk, which return the string "beep" only if the isRunning property is true
*/

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}
Vehicle.prototype.turnOn = function () {
  this.isRunning = true;
};
Vehicle.prototype.turnOff = function () {
  this.isRunning = false;
};
Vehicle.prototype.honk = function () {
  if (this.isRunning === true) {
    return "BEEP!";
  }
};

/* Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods (which should be an array). */

function Person(
  firstName,
  lastName,
  favoriteColor,
  favoriteNumber,
  favoriteFoods
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = favoriteFoods;
}
/* Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together. */
Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

/* var p = new Person("Shana", "Malarkin", "Green", 38);
p.fullName(); // Shana Malarkin */

/* Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format:
var p = new Person("Shana", "Malarkin", "Green", 38);
p.toString(); // Shana Malarkin, Favorite Color: Green, Favorite Number: 38 */
Person.prototype.toString = function () {
  return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
};

/* Add a property on the Person object called family which is an empty array. */

/* Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor - take a look at the instanceof operator. Make sure that your family array does not include duplicates! This method should return the length of the family array. */
/* var p = new Person("Shana", "Malarkin", "Green", 38) 
p.family; // []
p.addToFamily(p); // 1
p.family.length; // 1
p.addToFamily(p); // 1 - No duplicates!
p.family.length; // Length should still be 1 */
function Person(
  firstName,
  lastName,
  favoriteColor,
  favoriteNumber,
  favoriteFoods
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = favoriteFoods;
  this.family = [];
}
Person.prototype.addToFamily = function (obj) {
  if (obj instanceof Person) {
    if (this.family.length == 0) {
      return this.family.push(obj);
    }
    for (item of this.family) {
      if (!(JSON.stringify(item) === JSON.stringify(obj))) {
        return this.family.push(obj);
      }
    }
  }
};
