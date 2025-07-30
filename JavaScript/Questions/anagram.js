//An anagram is a word or sentence, which usually contains all the original letters exactly once

function isAnagram(wordOne,wordTwo){
    wordOne = wordOne.toLowerCase().replace(/[^a-z0-9]/g, "");
    wordTwo = wordTwo.toLowerCase().replace(/[^a-z0-9]/g,"");

    if(wordOne.length !== wordTwo.length) return false;

    let strA = wordOne.split("").sort().join("");
    let strB = wordTwo.split("").sort().join("");

    return strA === strB
}

str1 = "listen";
str2 = "silent"

// console.log(isAnagram(str1,str2));

//another method


function checkAnagram(str1,str2){
    if(str1.length !== str2.length) return false;
    
    function frequency(str){
        let obj = {};
        for(let char of str){
            obj[char] = (obj[char]||0) + 1;
        }
        return obj;
    }

    let firstWord = frequency(str1);
    let secondWord = frequency(str2);

    for(let char in firstWord){
        if(firstWord[char] !== secondWord[char]){
            return false;
        }
    }
    return true; 

}

console.log(checkAnagram(str1,str2))