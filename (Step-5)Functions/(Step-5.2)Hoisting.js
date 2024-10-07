/*
Hoisting:- Moving of function declaration to the top of the file, it's done automatically by the JS engine.
*/


printNumber(10);

function printNumber(n){
    console.log(n);
}



/*function ko main function definition ke neeche se call karu yaa fir function ko main oopar se call karun...mera function tab bhi
call ho jaayega....c++ jaisi language mein toh humko function jo hai oopar likhna padta hai or function call neeche likhni padti
hai....but javascript mein kahin se bhi function call karlo....or issi ko hoisting kehte hain


JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables,
classes, or imports to the top of their scope, prior to execution of the code. i.e. iska matalb hai ki javascript kaa code execute
hone se pehle hi interpreter functions, classes, variable ki declarations or definitions ko top of the scope move kar deta hai...or
iss wajah se sabse pehle functions, classes, variables interpret ho jaate hain execute hone se pehle....isliye hum function oopar
se call akre yaa fir neeche se call kare...function hamesha call ho jaayega...koi error nahin aayegi.
*/


/* to oopar wale example mein JS engine jo hai mere function ko oopar i.e. top par move kar dega automatically or meri function call
jo hai ('printNumber(10)') woh neeche aa jaayegi...or yeh sab kaam backgroind mein hoga automatically...

Interpreter kuch iss tareeke se mere function ko top par move kar dega or mere function call wala code neeche aa jaayega..see below:-

function printNumber(n){
    console.log(n);
}
printNumber(10);
*/


//----------------------------------------------------------------------------------------------------------------------------------->

let ans = function walk(){
    console.log("Walking");
}

ans(); //Output:- Walking

// walk(); //Output:-ReferenceError: walk is not defined


/* agar main ans() function ko ooapr likhunga toh fir error aayegi...lekin abhi humne hoisting padh thi or usmein toh chal raha
tha.....toh ismein isliye nahin chalega kyoki humne function ko assign kiya hai hai ek 'ans' variable ko...or jab kisi function 
ko assign kiya jaata hai kisi variable mein toh fir hoisting wala concept kaam nahin karta hai */