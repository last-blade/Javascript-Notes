//Array is a reference type and reference types are called Objects i.e. Array is an object in JavaScript. 
let fruits=["apple", "mango", "grapes"];
console.log(fruits);

let a=[1,2,3,4, "Hello", null, undefined]; //We cn see that Array can store any type of datatype in an individual array
console.log(a); // 

fruits[2]="Lichi";
console.log(fruits);

console.log(typeof fruits);// Output:-Object i.e. Array is an object in javaScript

 // Agar humein check karna hai ki 'fruits' ek array hai toh iske liye 'Array.isArray("your array name");
 console.log(Array.isArray(fruits)); //output;- "True" it means "fruits" ek array hai isliye output true aaya