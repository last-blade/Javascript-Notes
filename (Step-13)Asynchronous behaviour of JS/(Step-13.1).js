/*
Let's understand through an example of synchronous and asynchronous:- 
*/

//Synchrounous code
function hello(){
    console.log("First");
}
hello();
console.log("Second");
//OUTPUT:- First Second
/*
Synchronous code line by line execute ho raha hai isliye yeh synchrnous example hai
*/


//Asynchrounous code

setTimeout(function(){
    console.log("1")
}, 200);

console.log("2");

/*OUTPUT:- 2
           1 
/*
Iss code mein pehle "1" print hona chahiye tha but pehle "2" print hua hai or fir "1" print hua hai i.e. line wise code execute
nahin hua hai...pehle console.log("2") wala code execute huya and fir 200ms baad console.log("1") line wala code execute hua
since yeh ek asynchronous code hai toh fir yeh event loop wale mechanishm ko follow karega....

(Step-1) pehle setTimeout wala poora function call stack mein jaayega or fir ekdum se turant hi yeh function browser par chala
        jaayega or browser par 200ms wait karega....and then event queue mein transfer ho jaayega yeh function setTimeout wala.

(Step-2)tab tak 23 line (console.log("2")) wala code jo hai call stack mein jaayega or ir execute hone ke baad call 
        call stack se Pop ho jaayega (console.log("2")) and meri call stack ab empty ho gayi hai kyoki abhi koi bhi
        line nahin bachi hai execute hone ko...
 
(Step-3) ab 200ms ho gayi hain poori...toh fir setTimeout wala poora function utthkar jo hai event Queue mein chala jaayega...or fir
        check hoga ki call stack empty hai ki nahin....agar empty hai toh fir setTimeout wala function jo hai call stack mein
        chala jaayega or fir execute ho jaayega yeh setTimeout wala function and fir completey excute hone ke baad call stack
        se POp ho jaayega....and in other case, agar 200ms khatam ho jaati hain setTimeout wale function ki, toh fir yeh koi
        gurantee nahin hai ki 200ms khatam hote hi yeh function execute ho jaayega event queue se nikal ke...jab tak call
        stack empty nahin hoti hai tab yeh yeh setTimeout wala function event queue mein hi wait karega chahe 200ms se oopar
        time beet jaaye....saare asynchronous wale code aise hi event loop wala mechanism follow karte hain  

*/
