/* Given the following nested object:

let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}
Using a for loop, console.log all of the numbers in the primeNumbers array.
Using a for loop, console.log all of the even Fibonnaci numbers.
Console.log the value "second" inside the order array.
Invoke the addSnack function and add the snack "chocolate".
Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function? */

let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13],
    },
    addSnack: function (snack) {
      this.snacks.push(snack);
      return this;
    },
  },
};

function iterate() {
  for (item of nestedData.innerData.numberData.primeNumbers) {
    console.log(item);
  }
  for (item of nestedData.innerData.numberData.fibonnaci) {
    if (item % 2 == 0) console.log(item);
  }
  console.log(nestedData.innerData.order[1]);
  nestedData.innerData.addSnack("chocolate");
}

/* Given the following nested object:

let nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}
Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.

Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.

Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values. */

let nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000,
          },
        },
      },
    },
    languages: {
      spanish: {
        hello: "Hola",
      },
      french: {
        hello: "Bonjour",
      },
    },
  },
};

function addSpeaker() {
  nestedObject.speakers.push({ name: "Joel" });
}
function addLanguage() {
  nestedObject.data.languages.german = { hello: "Hallo" };
  console.log(nestedObject.data.languages);
}
addLanguage();
function addCountry() {
  nestedObject.data.continents.europe.countries.germany = {
    capital: "Berlin",
    population: 83000000,
  };
}
