const tinderUser=new Object()
tinderUser.id="233fr3d"
tinderUser.name="vivek"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"dfgerwvasdv.com",
    fullName:{
        userfullname:{
            firstname:"vivek",
            lastname:"singh"
        }
    }
}
// console.log(regularUser.fullName.userfullname); 
// console.log(regularUser.fullName.userfullname.firstname);  


// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);


const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"vivek"
}
// course.courseInstructor

const {courseInstructor:instructor}=course
// console.log(courseInstructor);
console.log(instructor);