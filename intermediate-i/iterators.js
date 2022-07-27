/* forEach */
/* Exercises
Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first character and the last character of each value.

printFirstAndLast(['awesome','example','of','forEach'])

/ ae
/ ee
/ of
/ fh */

function printFirstAndLast(arr) {
  for (item of arr) {
    let it = item.split("");
    it.forEach(function (val, ind) {
      console.log(`${it[0]}${it[it.length - 1]} `);
    });
  }
}

/* Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value have been added to each object in the array.

addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true)

/
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
/
 */

function addKeyAndValue(arr, key, val) {
  let newArr = [];
  arr.forEach(function (va, ind) {
    for (item in va) {
      console.log(item);
      va[key] = val;
    }
  });
  newArr = arr;
  return newArr;
}

/* map */

/* Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:

valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([5,10,15]) // [0,10,30] */

function valTimesIndex(arr) {
  return arr.map(function (val, ind) {
    return val * ind;
  });
}

/* Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:

extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name")

/ ["Elie", "Tim", "Matt"] */

function extractKey(arr, key) {
  return arr.map(function (val, ind) {
    for (item in val) {
      if (item == key) {
        return val[item];
      }
    }
  });
}

/* filter */

/* Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive

filterLetters(["a","a","b","c","A"], "a"); // 3
filterLetters(["a","a","b","c","A"], "z"); // 0
filterLetters(["a","a","b","c","A"], "B"); // 1
 */

function filterLetters(arr, le) {
  return arr.filter(function (val, ind) {
    val = val.toLowerCase();
    le = le.toLowerCase();
    return val == le;
  }).length;
}

/* Write a function called filterKey which accepts two parameters, an array of objects, and the name of a key and returns an array with only those objects which have truthy values for that key:

filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious")

/ [{name: "Tim", isInstructor:true, isHilarious:true}] */

function filterKey(arr, key) {
  return arr.filter(function (val, ind) {
    if (val[key]) {
      return val;
    }
  });
}

/* reduce */

/* Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:

extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");

/ ["Elie", "Tim", "Matt"] */

function extractKey(arr, key) {
  return arr.reduce(function (acc, next) {
    acc.push(next[key]);
    return acc;
  }, []);
}

/* Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive

filterLetters(["a","a","b","c","A"], "a"); // 3
filterLetters(["a","a","b","c","A"], "z"); // 0
filterLetters(["a","a","b","c","A"], "B"); // 1 */

function filterLetters(arr, le) {
  return arr.reduce(function (acc, next) {
    next = next.toLowerCase();
    le = le.toLowerCase();
    if (next == le) {
      acc.push(next);
    }
    return acc;
  }, []).length;
}

/* Optional Bonus

Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value has been added. You can do this a few ways, either by reducing starting with an empty array and making copies of the object or by starting with the actual array!

addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true);

/
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
/
 */

function addKeyAndValue(arr, key, val) {
  return arr.reduce(function (acc, next) {
    next[key] = val;
    console.log(next);
    acc.push(next);
    return acc;
  }, []);
}

/* { Iterators Exercises. } */

/* Part I
Use the following object for this set of questions:

let users = [
  {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
      city: 'San Francisco',
      state: 'CA'
    }
  },
  {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
      city: 'New York',
      state: 'NY'
    }
  },
  {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
      city: 'Fargo',
      state: 'SD'
    }
  },
  {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
      city: 'Albany',
      state: 'NY'
    }
  },
  {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
      city: 'Los Angeles',
      state: 'CA'
    }
  }
]; */

/* Write a function called printEmails which console.log's each email for the users.
printEmails();
/ larry@foo.com
/ jane@test.com
/ sam@test.com
/ anne@test.com
/ david@test.com */

function printEmails() {
  users.forEach(function (val, ind) {
    console.log(val["email"]);
  });
}
printEmails();

/*Write a function called printHobbies which console.log's each hobby for each user.
printHobbies();
// "Fishing",
// "Sailing",
// "Hiking",
// "Swimming",
// "Biking",
// "Hiking",
// "Golf",
// "Cooking",
// "Archery",
// "Tennis",
// "Biking",
// "Archery",
// "Volunteering",
// "Biking",
// "Coding", 
 */
function printHobbies() {
  users.forEach(function (val, ind) {
    for (item of val.hobbies) {
      console.log(item);
    }
  });
}
printHobbies();

/* Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in
findHometownByState('CA');
/
{
    username: "larry",
    email: "larry@foo.com",
    years_experience: 22.1,
    favorite_languages: ["Perl", "Scala", "C++"],
    favorite_editor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
        city: "San Francisco",
        state: "CA"
    }
}
/ */

function findHometownByState(st) {
  return users.find(function (val) {
    console.log(val.hometown.state);
    return val.hometown.state == st;
  });
}
findHometownByState("CA");

/* Write a function called allLanguages which returns an array of all of the unique values
allLanguages();
/ ["Perl", "Scala", "C++","Haskell", "PHP","JavaScript","Ruby", "Python", "Go","C#", "F#", "Swift"] */

function allLanguages() {
  return users
    .reduce(function (acc, next) {
      for (item of next.favoriteLanguages) {
        acc.push(item);
      }
      return acc;
    }, [])
    .filter(function (val, ind, arr) {
      return arr.indexOf(val) == ind;
    });
}
allLanguages();

/* Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in
hasFavoriteEditor('VS Code'); // true
hasFavoriteEditor('Eclipse'); // false */
function hasFavoriteEditor(co) {
  return users.some(function (val) {
    return val.favoriteEditor == co;
  });
}
hasFavoriteEditor("VS Code");

/* Write a function called findByUsername which takes in a string and returns an object in the users array that has that username
findByUsername('david');
/
{
    username: "david",
    email: "david@test.com",
    years_experience: 12.5,
    favorite_languages: ["JavaScript", "C#", "Swift"],
    favorite_editor: "VS Code",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
        city: "Los Angeles",
        state: "CA"
    }
}
/ */

function findByUsername(str) {
  return users.find(function (val) {
    return val.username == str;
  });
}
findByUsername("david");

/* Part II */

/* Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).
vowelCount('incredible');
/ {i:2, e: 2}
vowelCount('awesome');
/ {a:1, e:2, o:1} */

function vowelCount(str) {
  str.toLowerCase();
  let arr = str.split("");
  return arr.reduce(function (acc, next) {
    if (
      "a" == next ||
      "e" == next ||
      "i" == next ||
      "o" == next ||
      "u" == next
    ) {
      if (acc[next] == 1) {
        acc[next] += 1;
      } else {
        acc[next] = 1;
      }
    }
    return acc;
  }, {});
}
vowelCount("incredible");

/* Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function).
removeVowels('amazing'); // ["m","z","n","g"]
removeVowels('fun'); // ["f","n"]
removeVowels('silly'); // ["s","l","l","y"] */

function removeVowels(str) {
  str.toLowerCase();
  let arr = str.split("");
  return arr.filter(function (val) {
    if (
      "a" !== val &&
      "e" !== val &&
      "i" !== val &&
      "o" !== val &&
      "u" !== val
    ) {
      return true;
    }
  });
}
