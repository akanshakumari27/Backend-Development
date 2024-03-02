// Object Oriented Programming
// Console -> [1,2,3] by entering this will return Array and Prototype(It's a built in properties/function which can apply on array(object) like pop, push etc)
// Protopye are Mechanism by which Javascript Objects inherit feature from one another.
// "Prototype is like single template Object" that all Objects(like Array, String) inherit Methods and properties from without having their own copy

// Created index.html and script.js, linked "script.js with html file" by using Script tag 
// script.js
let arr = [1,2,3]

// Now in window, Console 
// ~ arr.__proto__  ,(reference as in Script.js it defined as arr, by any defined "value + __proto__" we can extract it's F/P) print all the function/properties of an array
// ~ Array.prototype  ,(Actual)
// ~ String.prototype  ,(all F/P like toUpperCase(), trim() etc)

// We can also change it's property
// ~ arr.__proto__.push = (n) => {console.log("Number Pushed")}  
// means when we try to push(n) it won't actually perform push but just print console.log as we changed it's property from "push -> console.log"

// Every Object in Javascript has a Built-in Object known as Prototype. A prototype is itself an Object, So prototype have it's own prototype "making What's called Prototype Chain"
// "Chain ends" when we reach a prototype that has "Null for it's own prototype"

// In script.js File, we defined same function for bot arr1 and arr2

arr1.sayHello() === arr2.sayHello()  // ~ False, because both arr creating it's own different-diffrent memory alocations

"abc".toUpperCase() === "xyz".toUpperCase() // ~ True ,because here that both function calling from same prototype in same memory location


// *** Factory Function ***
// Now we need to add data for 1000 people, we can't create object for every people again and again, So Factory Function
function personInfo(name,age){
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hi My name is ${this.name} and age ${this.age}`)
        },
    }
    return person;
}

let p1 = personInfo("Adam","34")
let p2 = personInfo("swiden","45")

//But still it's not efficient because
p1.talk === p2.talk  
//~ False ,for every talk, it's storing in different memory allocation by making different Copies therfor consuming alot memory and space


// *** So, therefor we will Shift to better approach that's "New Operator". ***
// It's Constructor
// Can also search it's approch in - "new operator mdn"

//This is first making an Constructor
function personInfo(name, age){
    this.name = name,
    this.age = age
}
personInfo.prototype.talk = function(){
    console.log(`Welcome ${this.name} in Our page, your age is ${this.age}`)
}

// Now creating an Object
let p1 = new personInfo("Sam",34)
let p2 = new personInfo("Hardik",56)

//"this" keyword is just a window, without "new", comment "new" and console.log(this)  {use of "this" in Constructor}
// But "new" keyword helps to intialize an instance of an Object  {use of "new" in Object}


// Now
p1.talk() === p2.talk()
//~ True, because now it's calling From same Function Stored in Prototype, not a different-different Object properties
// Can check, In Terminal
// ~ p1, expand it, will find that inside "Prototype" the function is written
// ~ p2, will find same, therfor both function is calling from same Prototype Function 

