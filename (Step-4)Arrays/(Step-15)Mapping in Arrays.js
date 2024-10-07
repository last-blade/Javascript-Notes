let arr = [2,10,8,6];

let ans = arr.map(function(x){
    return "Student No." + x;
});

console.log(ans); //OUTPUT:- ['Student_No.2', 'Student_No.10', 'Student_No.8', 'Student_No.6']


console.log(Array.isArray(ans)); //Output:- True
console.log(typeof ans); //Output:- Object (because array is an object in javascript)

