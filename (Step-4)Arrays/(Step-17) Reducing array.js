//Reducing an Array


//Adding the value of array using for-of loop
let a = [1,2,3,4];
var total = 0;
for(let x of a)
{
    var total = total+x;
}
console.log(total);

//Example of reducing an array
let arr = [1,2,3,4,5];
let y = arr.reduce((accumulator, currentValue)=> accumulator+currentValue, 0); 
console.log(y);
