//How to slice or trim the arr array
let arr1 = [1,2,3,4,5,6,7];


let arr2 = arr1.slice(2,5); //Output:- [3,4,5]
console.log(arr2);


//agar hum ek hi argument de tab kya hoga
let arr3 = arr1.slice(2);// toh fir 2 index se leke aage tak ke element print ho jaayenge 3,4,5,6,7 
console.log(arr3);  


// agar hum ek bhi argument naa de tab kya hoga
let arr4 = arr1.slice(); //aisa karne se array ki copy ban jaayegi
console.log(arr4);