let arr = [10,20,30,40,50,60];


//For-of Loop:-----------------
for(let i of arr){
    console.log(i);
}


//For-in Loop-------------------
for(let j in arr){ //OUTPUT:-0,1,2,3,4,5 yeh for-in loop indexes print kar raha hai becase for-in loop kewal primitive type par hi laga sakte hain and array toh reference type hai
    console.log(j);
} 


//For-each Loop:-----------------
arr.forEach(function(x){ //for-each loop ke andar callback function dena padta hai
    console.log(x);
})

// arr.forEach((x) => console.log(x)) // above for each loop mein callback function ko arrow function mein convert kar diya.