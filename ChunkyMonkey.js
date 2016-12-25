/*
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var brokenUp = [];
  var cleanArray = [];
  
  for (var i = 0; i < arr.length; i++) {
    if ((i % size) === 0 && cleanArray.length > 0) {
      brokenUp.push(cleanArray);
      cleanArray = [];
      cleanArray.push(arr[i]);
    } else {
      cleanArray.push(arr[i]);
    }
  }
  brokenUp.push(cleanArray);
  
  return brokenUp;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); //should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
