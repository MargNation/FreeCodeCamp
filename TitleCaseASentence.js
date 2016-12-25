/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  var brokenUp = str.toLowerCase().split('');
  brokenUp[0] = brokenUp[0].toUpperCase();
  for (var i = 1; i < brokenUp.length; i++) {
    if (brokenUp[i] == " ") {
      brokenUp[i + 1] = brokenUp[i + 1].toUpperCase();
    }
  }
  return brokenUp.join('');
}

titleCase("I'm a little tea pot"); // should return a string.
titleCase("I'm a little tea pot"); //  should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt"); //  should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); //  should return "Here Is My Handle Here Is My Spout"