// find the index of given element in array

function findIndexOfElement(arr,val){
    let newArr = [];
    const res = arr.map((item,index)=>{
        if(item===val){
            return newArr.push(index);
        }
    })
    return newArr;
}

const items = [2,5,6,2,3,6,1,6];
const element = 2;
console.log(findIndexOfElement(items,element))