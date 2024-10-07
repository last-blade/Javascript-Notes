/* 
(1). Math object:- The 'Math' namespace object contains static properties and methods for mathematical constants and functions.
                    Unlike most global objects, Math is not a constructor. You cannot use it with the new operator or invoke 
                    the Math object as a function. All properties and methods of Math are static.
 */
console.log(Math.random()); /* The Math.random() static method returns a floating-point, pseudo-random number that's greater\
                                 than or equal to 0 and less than 1....i.e., math.random() jo hai hamesha 0 yaa 0 se badi value or 1
                                 se chhoti value return karta hai randomly*/

console.log(Math.PI); //math.Pi jo hai Pi ki value print kar dega

console.log(Math.round(1.8)); //1.8 value ko round-off kar dega yeh method or output mein 2 aayeag

console.log(Math.max(2,4,3,1,9,5,8)); // math.max method maximum value return karega or output mein 9 aayega

console.log(Math.abs(-8)); //yeh method -ve value ko positive bana deta hai and +ve ko +ve hi rehne deta hai.
