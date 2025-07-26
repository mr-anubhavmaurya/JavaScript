
const text1 = document.getElementById("text1");
//method
// function debounce(cb,delay){
//     let timerId;
//     return function(...args){
//         clearTimeout(timerId);
//         timerId = setTimeout(()=>{
//             cb(...args);
//         },delay)
//     }
// }

// function userInput(query){
//     console.log("input:-", query);
// }
// const debounceCall = debounce(userInput,2000);

//method
let timerId;
text1.addEventListener('input', (e)=>{
    console.log(e.target.value);

 
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            console.log("value:", e.target.value);
        },3000);
    
})



