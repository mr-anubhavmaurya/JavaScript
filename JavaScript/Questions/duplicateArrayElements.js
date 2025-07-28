// method 1 to find duplicate element

let arr = [1, 3, 7, 3, 7, 5, 2];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      // console.log("duplicate", arr[i]);
    }
  }
}

// method 2 to find duplicate element and concat with given string and replace every 4th character with "_".

function duplicate(arr) {
  let map = new Map();
  for (let char of arr) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  const res = Array.from(map.entries()).filter(([key, value]) => {
    return value > 1;
  });
  str = res.flat(Infinity).join("").concat("abcdef");
  str = Array.from(str);
  for (let i = 0; i < str.length; i++) {
    if ((i + 1) % 4 === 0) {
      str[i] = "_";
    }
  }
  return str.join("");
}
console.log(duplicate(arr));
