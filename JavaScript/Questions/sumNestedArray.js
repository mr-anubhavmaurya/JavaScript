//function for sum of nested array

function nestedSum(arr) {
  let total = 0;
  for (let item of arr) {
    if (Array.isArray(item)) {
      total += nestedSum(item);
    } else {
      total += item;
    }
  }
  return total;
}

const nestedArray = [1, [2, 3], [4, [9, [5, 6]], 7, 8, [2, 3]]];
console.log(nestedSum(nestedArray));
