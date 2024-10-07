// Primitive Type Vs Reference Type

//Example on Primitive type:-
let a = 10;
let b = a;
a++;
console.log(a); //Output:- 11
console.log(b); //Output:- 10
/* iss oopar wale mein 'a' variable ki copy bani hai or 'b' variable mein store ho gayi hai...and fir 'a' variable alag hai and
    'b' variable ek alag memory par stored hai.... 'a' ko change karne se 'b' variable change nahin hoga or vice-versa */


//Example on Refernce type:-

/* iss example mein 'x' naam kaa ek object banaya hai (because object, arrays, functions yeh teeno reference type hote hain)
    agar main 'x' object ko copy karke 'y' object mein daaldun toh fir 'y' object bhi same memory location or address par
    point karega i.e. 'x' and 'y' object dono kaa address same hoga....'x' object mein change karne se 'y' object mein bhi
    change aayega....kyoki dono objects same memory address par point kar rahe hain....i.e. 'x' object ki copy nahin bani hai
    ....jaise ki oopar primitive type mein copy bani thi veriable 'a' ki 'b' mein and dono hi alag address par store thay variables*/
let x = {
    num: 10
};

let y = x;
x.num++;
console.log(x.num); //Output:- 11
console.log(y.num); //Output:- 11



//Example-2 on Refernce type:-

let xyz = {value: 10};

function increment(){
    xyz.value++;
}

increment();

console.log("Incremented value", xyz.value);