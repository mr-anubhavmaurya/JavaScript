
function matrixSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            sum = sum + arr[i][j]
        } 
    }
    return sum
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrixSum(matrix))

//method-2
const sum = matrix.flat().reduce((acc,curr)=> acc+curr);
console.log(sum)