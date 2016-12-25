/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  // Remove all the values
  
  var destroyedArray = [];
  var argsArray = [].slice.call(arguments);
  var flag = false;
  

  for (var i = 0; i < argsArray[0].length; i++) {
    if (argsArray.indexOf(arr[i], 1) == -1) {
      flag = true;
    }
    if (flag) {
      destroyedArray.push(arr[i]);
      flag = false;
    }
  }
  return destroyedArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); //should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1].
destroyer([2, 3, 2, 3], 2, 3); // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53); // should return ["hamburger"].
