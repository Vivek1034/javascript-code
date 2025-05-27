// object literals

const mySym=Symbol("mySymbol")


const jsUser={
    name:"vivek",
    "full name":"vivek singh",
    [mySym]:"mySymbol",
    age:18,
    city:"chennai",
    email:"kndvdfivdfbkj.com",
    isLogginedIn:true,
    lastLoginDays:["monday","tuesday","wednesday"]
}
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email="hbduvdevudsv.com";
// Object.freeze(jsUser);
// jsUser.email="dhbvuerbasdc.com";
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello js user");
}
jsUser.greeting2=function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());

console.log(jsUser.greeting2());
