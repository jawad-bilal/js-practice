console.log("This file is for JS Functions");
// normal way to print out the data
console.log("this is done normally using console.log()");
let person_name = "Jawad Bilal";
let person_name1 = "Ali";
let person_name2 = "shuban";
let person_name3 = "Umer";
console.log(person_name + " is a software engineer.");
console.log(person_name1 + " is a software engineer.");
console.log(person_name2 + " is a software engineer.");
console.log(person_name3 + " is a software engineer.");

// printing data using fucntions
console.log("this is done using funtions for short code");
function greet(person_name, text="good evening!!") {
    console.log(text + " " + person_name + " is here for your services.");
}
let greettext = "Good Morning!!";
greet(person_name, greettext);
greet(person_name1, greettext);
greet(person_name2, greettext);
greet(person_name3);
let returnVal = greet(person_name3);
console.log(returnVal);

// function with some retirn value
function sum(a , b , c) {
    console.log("This is a function with return value");
    let d = a + b + c;
    return d;
}
let returnVAl = sum(1, 2, 3);
console.log("The return value of the sum function is: " + returnVAl);// This will print the return value of the sum function