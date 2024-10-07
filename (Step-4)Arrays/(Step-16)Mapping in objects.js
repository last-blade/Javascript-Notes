let arr = [4,6,9,10];

let ans = arr.map(function(x){
    let obj = {"Student_No": x};
    return obj;
});

console.log(ans);

console.log(typeof ans); //Output:- Object
console.log(Array.isArray(ans)); //Output:- True