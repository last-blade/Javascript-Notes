//How to combine two arrays:-

// (1) Concat method--------------------
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr); //Output:- [1,2,3,4,5,6], arr1 and arr2 are combined

// (2) Spread operator method--------------------

let num1 = [10,20,30];
let num2 = [40,50,60];

let num3 = [...num1, ...num2];
console.log(num3);


// By using spread operator I can make the copy of any array
let copyArray = [...num1];
console.log(copyArray);
