/*
Suppose maine ek function banaya or uss function mein 3 parameters pass kiye hain and main 'c' variable ko value karna bhool gaya
toh fir uss case mein mera default parameter assign ho jaayega 'c' variable ko.....see below, maine 'c' variable ko default 
parameter '5' de diya hai...agar user jo hai value send nahin karta hai toh fir 'c' ki value '5' le lega....and agar use jo hai
'c' ki value pass karta hai toh fir default parameter nahin lega...uss case mein jo value pass ki hai wahi maani jaayegi....
jab hum koi value pass nahin karte hain tabhi default parameter send hota hai.....

neeche code mein default parameter maine 'c' variable ko diya hua hai (i.e. 5).....or maine function call karte time 'c' variable 
ki value send ki hai '4'....toh iss case mein mera 'c' variale jo hai '4' ko consider karega naa ki default parameter '5' ko.
*/


function sum(a, b, c=5){
    return a+b+c;
}

let ans = sum(2,3,4);
console.log(ans);


/*
NOTE:- jis jagah par main dafault parameter banata hoon, toh fir uss se aage ke jitne bhi parameters honge woh sab default banane
       padenge...like, function sum(a, b, c=2, d)....yeh wrong ho jaayega...'c' variable ko default parameter banaya hai toh fir
       usse aage ki jitne bhi variable hain unn sabko default banana padega...i.e., 'd' variable ko bhi default parameter banana padega
*/