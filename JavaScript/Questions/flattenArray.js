//flatten array without array.flat()

function flattenArray(arr) {
   const res = arr.reduce((acc,val)=>{
    if(Array.isArray(val)){
        return acc.concat(flattenArray(val))
    }
    else{
        return  acc.concat(val);
    }
   
   },[])
   return res;
}


const nestedArray = [1, [2, 3], [4, [9,[5, 6]],7,8]];
const flattened = flattenArray(nestedArray);
console.log(flattened); 