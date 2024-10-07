/*Event Loop:- The JavaScript event loop is a mechanism that allows JavaScript to perform asynchronous operations. It is
a single-threaded loop that continuously monitors for events and then executes the appropriate callback functions
when those events occur.

/* Asynchronous code jo hai event loop ke dwara hi execute hota hai...or yeh sab browser handle karta hai naa ki
JS engine or Javascript
-->jab tak synchronous code execute nahin ho jaata poora kaa poora tab tak asynchronous code execute nahin ho 
    sakta..iska matlab yeh hai ki jab tak call stack empty nahin hogi tab tak asynchronous code jo hai
    callback queue mein se async. code stack mein nahin jaayega execute hone ke liye or fir jasie hi call stack
    empty hogi tabhi ekdum se async. code jo hai queue se nikal kar stack mein chala jayega or fir execute 
    hoga async. code and execute hone ke baad remove ho jaayega async code stack se */

//<------------------------------------------------------------------------------------------------------------->



/*setTimeOut():- The global setTimeout() method sets a timer which executes a function or specified piece of code
once the timer expires. setTimeout() is an asynchronous function, meaning that the timer function will not pause
execution of other functions in the functions stack. In other words, you cannot use setTimeout() to create a
"pause" before the next function in the function stack fires.

/* neeche code keh raha hai ki function ke andar jo bhi likha hai isko execute hone ke liye 4 second
kaa wait karna padega and fir 4s wait karne ke baad execute hoga....but yeh zaroori nahin hai ki yeh 4 second
hone par hi chalega...yeh jo time diya hai naa, yeh ek minimum time diya hua hai, matlab ki koi gurantee nahin
hai ki 4 second ke baad yehc ode execute hoga..kyoki yeh humne minimum time mention diya hai ki kam se kam 4 
second baad chal jaana chahiye yeh code nahin toh fir 4 second se zyada bhi time wait karna pad sakta hai iss 
code ko execute hone ke liye....kya pata 4 second wait karne baad ekdum se code chal jaaye yaa fir call stack
empty maanlo aadhe ghante tak empty hi nahin hokar de rahi hai toh fir yeh async code hain, toh iska matlab
jab tak call stack empty nahin hogi yeh bechara tab tak callback Queue ke andar intezaar hi karta rahega apne
execution ke liye...jab tak call stack empty nahin hogi yeh tab tak callback Queue mein hi baitha rahega....
toh problem hoti hai async code mein */
setTimeout(function(){
    console.log("Hello");
}, 4000);
//oopar code mein "Hello" jo hai 4 second baad print hoga
