// call() -> call is used to invoke a method with object as an argument.
// functionName.call(this, arg1,arg2, ...args){}
// this value refers to the object to be used

//--> 1
function setUsername(username){
    this.username = username;
}
function createUser(username,email,password){
    // here this refers to createUser
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
    // console.log(`my name ${this.username}:${this.email}:${this.password}`);
}

const user1 = new createUser("amit","amit@fb.com","123");
const user2 = new createUser("jane","jane@fb.com","45");

// console.log(user1.email);
// console.log(user2)

//--> 2
function details(arg1,arg2){
    console.table([`${this.id} ${this.fname} ${this.lname} ${arg1} ${arg2}`])
}
const obj1 = {
    fname: "jane",
    lname: "doe",
    id: "01",
    about: function(){
        console.log(`${this.id}-${this.fname}`)
    }
}
const obj2 = {
    fname: "john",
    lname: "wick",
    id: "02",
}
//here this refers to obj2 for which about() method is called. about() is borrowed from obj1.
obj1.about.call(obj2);

details.call(obj1);


//bind() -> returns a function 

const func = details.bind(obj2, "arg1", "arg2");
func();