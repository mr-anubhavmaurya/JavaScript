// Arrow functions do not have their own this binding.
// Instead, they inherit the this value from the enclosing lexical scope where they are defined. This means that the value of this inside an arrow function is determined by the surrounding context at the time the arrow function is created, not when it is called.

// this-> this refers to the current execution context.
// this refers to the current object which it belongs to. value of this is determined by how a function is called.

const obj1 = {
    fname: "ankit",
    lname: "singh",
    age: 22,
    city: "indore",
    print(fname,lname){
         this.fname = "jane";
         this.lname = "doe";
        console.log(this.fname, this.age)
        // return `${this.fname}, ${this.age}`;
        const user =()=>{
            console.log('arrow func',this) // refers to obj1
            console.log("inside arrow:",this.lname, this.city);
        }
        user();
    }

}
// obj1.print();


// console.log(obj1.print("12","35"));
// console.log("obj1-",obj1);

//-------------
const obj2 = {
    car: "bmw",
    color: "red",
    price: "$1200",
    about: ()=>{
        // this refers to window object.
        console.log("arrow func this-",this);
        console.log(`${this.car}:${this.color}`)
    }
}

console.log(obj2.about());