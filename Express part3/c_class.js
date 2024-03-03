// Now we will move towards more Optimised Approach
// Classes (it should also Start with "Capital Letter!" for good practice)

//index.js (this file should be in same folder with index.html)
class PersonInfo{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    talk(){
        console.log(`Welcome ${this.name} in Our page, Your age is ${this.age}`)
    }
}

let p1 = new PersonInfo("Adam",64)
let p2 = new PersonInfo("xyz",86)

//Previous Approach -> Constructor Properties + writting Constructor function Outside by writting ConstructorName.prototype
//Current Approach -> Constructor Properties + It's Function Both Summarised inside a Class.


// *** Inheritance ***
// Inheriting the property from Parent class to Child class
// Using "extends and super"

class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    talk(){
        console.log(`Hello ${this.name}, Welcome to our page your age is ${this.age}`)
    }
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age)
        this.marks = marks
    }
}

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age)
        this.subject = subject
    }
}

let p1 = new Student("Aman",34,76)
let p2 = new Teacher("Shriya",34,"English")

//Instead of writting whole seperate functions for Students and Teacher, we directly wrote 1 function and inherit it's properties to Students and Teacher
