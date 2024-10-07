/* Constructor of objects.....means jo bhi object create hua hai uska constructor (i.e. object kisne bnaya hai nirmata kaun hai)
kaun hai */

/* 
For example below:-
*/

function objectCreate(andr, brnd, cam, weig){
    this.android= andr,
    this.brand= brnd,
    this.camera= cam,
    this.weight= weig
}



let X = new objectCreate(8.1, 'Samsung', '50MP', '200gm');
/* mere 'X' object kaa constructor hai 'objectCreate' (because mera 'X' object jo hai 'objectCreate' wale function ke through bana hai,
    isliye 'X' object kaa constructor 'objectCreate' wala function hai).....lekin agar main pata lagana chahta hoon ki
    'objectCreate' ka aconstructor kaun hai...toh iska answer hai 'Function' (remember capital 'F' wala function)...i.e.
    'objectCreate' kaa constructor jo hai 'Function' hai jo ki 'objectCreate' function ko create kar raha hai(yaa kahe ki
    construct kar raha hai) background mein.....and yeh 'Function' constructor jo hai inbult hota hai...but hum iss inbuilt
    constructor ko create kar sakte hain ki internally yeh inbult function kaisa dikhta hai....see below:-
*/

let phone = new Function(
    'android', 'brand', 'camera', 'weight', /* pehle properties likhdi single quotes mein coma lagake...or yeh properties woh hain
                                                jo maine oopar 'objectCreate' naam kaa function banaya hai kyoki hum ussi kaa toh
                                                inbuilt constructor likh rahe hain yahaan apr toh isliye ussi ki properties hi
                                                toh likhi jaayegngi and fir backtics(` `) mein uss 'objectCreate' ki andar ki
                                                definition copy paste kardi or fir humara inbuilt constructor taoyaar hai or
                                                hum dekh sakte hain ki kaisa dikhta hai inbuilt constructor....and remember,
                                                har ek function object hota hai toh fir agar har ek function object hota hai
                                                toh fir uss object kaa constructor bhi hoga
                                            */
    `this.android= android,
    this.brand= brand,
    this.camera= camera,
    this.weight= weight`
);

let newPhone = new phone(8.1, 'Samsung', '50MP', '200gm');
console.log(newPhone);