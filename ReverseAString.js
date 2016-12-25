/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  var newArray = [];
  newArray = str.split('');
  newArray.reverse();
  toReturn = newArray.join('');
  return toReturn;
}

reverseString("hello"); //should return a string.
reverseString("hello"); //should become "olleh".
reverseString("Howdy"); //should become "ydwoH".
reverseString("Greetings from Earth"); //should return "htraE morf sgniteerG".
