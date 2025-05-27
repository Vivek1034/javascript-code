const array=[1,2,3,4,5,6,7,8,9,10];
// console.log(array[4]);
// array.push(11);
// console.log(array);
// array.pop();
// array.unshift(9);
array.shift();
console.log(array);
array.push(11);
array.push(12);
array.pop();
console.group("B",array);

const mi=array.slice(1,3);
console.log(mi);
console.log("C ",array);