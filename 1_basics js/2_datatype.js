// "use strict";
// // alert(3+3); we are using nodejs not browser 

// console.log("vivek");
// let age=18
// let isLoggin=true
// console.log(typeof age)
// console.log(typeof null)
// console.log(typeof undefined)


// MEMORY
// stack (primmitive), heap (non-primmitive)
let myName="vivek"
let myName2=myName
myName2="vivek singh"
console.log(myName)
console.log(myName2)


let userOne={
    name:"vivek",
    age:18
}
let userTwo=userOne
userTwo.age=19
console.log(userOne.age)
console.log(userTwo.age)