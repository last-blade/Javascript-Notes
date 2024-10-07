/*
Suppose main 2 primises create karta hoon p1 and p2...and Main chahta hoon ki P1 promise resolve hone ke baad hi mera
primise P2 chalna chahiye...i.e. P1 resolve hoga tabhi mera P2 chalega and agar resolve nahin hua P1 promise toh fir 
P2 promise nahin chalega.....toh iske liye then() kaa use karenge jaisa humne step-15.1 mein seekha hai
*/

let P1 = new Promise(function(resolve, reject){
    console.log("Primise P1");
    resolve(true);
});

P1.then(function(){
    let P2 = new Promise(function(resolve, reject){
        console.log("P1 promise resolve hone ke baad P2 promise chala hai")
    });
})

// P1.then((value) => console.log("P1 promise resolve ho gaya"))




/*
Lekin iss then() wale method mein ek problem hai.....agar main 50 promise likhtta hoon or main chahta hoon ki mere saare promises
ek ke baad ek chale...i.e. P1 chalne ke baad p2 cahle...fir p2 chalne ke baad p3 chale...toh aise toh mujhe har baar then() kaa
use karna padega....toh iss problem ko resolve karne ke liye "async-await" kaa concept introduce hua....see (Step-15.3)
*/
