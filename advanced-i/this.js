/* { Keyword 'this' Exercises. } */

/* Part 1

What is the value of the keyword this in the following example:
var data = this;
console.log(data); */

window;

/* What does this function output? Why?
function logThis(){
    return this;
}

logThis(); / */

//The keyword this uses the global context
window /* What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true
    },
    displayInfo: function(){
        console.log("Cat owner? " + this.catOwner);
    }
}

instructor.displayInfo() 
// */ //the keyword this uses its parent object context
`cat owner? undefined`;

/* What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.data.location;
        },
        data: {
            location: "Oakland"
        }
    },
}

instructor.info.displayLocation()  */

// access its parent object context, then displays the values in its data object
Oakland;

/* What does this function output? Why?
var instructor = {
    firstName: 'Tim',
    info: {
        catOwner: true,
        boatOwner: true,
        displayLocation: function(){
            return this.location;
        },
        data: {
            location: "Oakland",
            logLocation: this.displayLocation
        }
    },
}

instructor.info.data.logLocation() // Why might we be getting an error here? */

//because theres no location key attached to the info object
typeError;

/* Part 2 */

/* Call Apply Bind Exercises

Fix the following code:

var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
} */

var obj = {
  fullName: "Harry Potter",
  person: {
    sayHi: function () {
      return "This person's name is " + this.fullName;
    },
  },
};

obj.person.sayHi.call(obj);
