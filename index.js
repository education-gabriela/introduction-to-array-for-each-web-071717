var evens = [0, 2, 4, 6, 8, 10];

evens.forEach((even, index, array) => {
  console.log(`${even} is not odd!`);
})

// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}!!!`;
}

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely)

console.log(animals)
