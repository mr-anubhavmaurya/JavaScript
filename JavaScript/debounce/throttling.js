// function throttle(cb,interval){
//     let lastCall = 0;
//     return function(...args){
//         const now = Date.now();
//         if(now-lastCall < interval){
//             return;
//         }
//         lastCall = now;
//         return cb(...args);
//     }
// }

// function userInput(query){
//     console.log(query);
// }

// const throttleCall = throttle(userInput,1000);

// throttleCall("anubhva");

//method 2

const text2 = document.getElementById("text2");

function throttle(cb,interval){
    let lastCall = 0;
    return function(...args){
        const now = Date.now()
        if(now-lastCall>=interval){
            lastCall=now
            return cb(...args)
        }
    }
  
}
handlerFunc = (e)=>{
    console.log(e.target.value);
}

const throttleCall = throttle(handlerFunc,1000)
text2.addEventListener("input", throttleCall);

