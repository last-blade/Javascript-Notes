/*Filter method se basically hum filter kar sakte hain aarya ko...like array mein +ve and -ve integers hain....and mujhe bas positive 
integers chahiye...toh main filter kar sakta hoon....jaise hum amazon flipkart mein price range ke according filter karte hain
same waise hi real e-commerce jaisi websites mein use hota hai yeh filter function*/

let arr = [1,2,-3,4,6,-10,-8,7];

let filteredArr = arr.filter(function(num){ //ismein callback function dena padta hai
    return num>=0;
});

console.log(filteredArr); /*OUTPUT:- [1, 2, 4, 6, 7]  kewal +ve values values print huyi hain...*/



// let filteredAr = arr.filter((num)=> num>=0); //oopar wale function ko call-back function mein convert kar diya...
// console.log(filteredAr);
