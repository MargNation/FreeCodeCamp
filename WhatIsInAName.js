/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects 
that have matching property and value pairs (second argument). Each property and value pair of the source object 
has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is 
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument), 
because it contains the property and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  
  // What's in a name?
  var arr = [];
  var objectKeys = Object.keys(source);
  
  // Only change code below this line
  for (var i = 0; i < collection.length; i++) {
    var counter = 0;
    for (var j = 0; j < objectKeys.length; j++) {
      if (collection[i][objectKeys[j]] === source[objectKeys[j]]) {
        counter++;
      }
    }
    if (counter == objectKeys.length) {
      arr.push(collection[i]);
    }
  }
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); //should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }); // should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }); // should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }); // should return [{ "a": 1, "b": 2, "c": 2 }]
