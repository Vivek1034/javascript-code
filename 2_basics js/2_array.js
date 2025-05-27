// const marval_heros=["thor","itonman","hulk","spiderman"];
// const dc=["superman","batman","wonderwoman","flash"];

// console.log(marval_heros.concat(dc));

const another_array=[1,2,3,4,[5,6,7,[8,9,10]]];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("vivek"));
console.log(Array.from("vivek"));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));    
