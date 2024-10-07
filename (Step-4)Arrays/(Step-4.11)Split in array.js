//Split method
let message = "This is my book and pen";
let result = message.split(" "); //Output:- [ 'This', 'is', 'my', 'book', 'and', 'pen' ] // spaces ke basis par array ke elements split ho gaye, see above.
console.log(result);

let str = "Hello my name is Prashant. And I am 23 year old. I'm pursuing B.Tech";

let ans = str.split("."); //full stop jab bhi aayega wahan se meri string split ho jaayegi or ek 'ans' naam ke variable mein store karwa raha hoon main...or woh splitted string jo hai ek array ke form mein store hogi 'ans' variable mein or 'ans' variable ab array ban gaya hai
console.log(ans);



console.log(Array.isArray(ans)); //Output:- True
console.log(typeof str); //Output:- string
console.log(Array.isArray(str)); //Output:- False
console.log(typeof ans); //Output:- Object
