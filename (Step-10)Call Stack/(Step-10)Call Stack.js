/*
Javascript ek single threaded language hai....it means processing of one command at a time....i.e. ek command keh rahi hai ki
variable ki value ko increase kardo and ek command keh rahi hai kki variable ki value ko decrease kardo....toh ek time par 
2 command toh chal nahin sakti hain..ek time par ek hi command chalegi fir doosri command chalegi....and it's callled
synchronous behaviour of Javascript. 
*/

//Call Stack:-
/* jab bhi koi function chalta hai method chalta hai toh uski entry ek stack mein hoti hai or jab execute ho 
jaata hai toh fir uss function ki entry stack se delete ho jaati hai....let's take an example below:- 

function a()
{
    console.log("Hi");
    b();
}

function b()
{
    console.log("hello");
}

a();


--> Toh oopar ek example hai....sabse pehle humara code chalega oopar se toh JS engine dekhega ki function 
    declare ho rakha hai 'a' naam kaa lekin abhi chalega nahin yeh function jabtak call naa ho function 'a' 
--> fir neeche aayega toh JS engine ko dikhega function 'b' but functon 'b' execute nahin hoga jab tak ki 
    call naa kare function 'b' ko 
--> fir neeche aayenge or neeche function 'a' call ho raha hai....toh call stack mein function a() naam ki 
entry ho jayegi....fir function 'a' execute hoga usmein console.log("Hi") wala function likha hai...fir
toh yeh bhi ek function hai toh fir console wale function entry hogi call stack mein....jaise hi console.log
"Hi" print kar dega yaani console wala function execute hoke khatam ho jaayega toh jo call stack mein entry
ho rahi hao console.log ki woh hatt jaayegi entry humari stack se kyoki ab console wala function execute
ho chuka hai...
--> fir neeche b(); function call ho raha hai...toh fir b(); function ki entry create ho jaayegi stack mein and
function 'b' call hua hai toh fir function 'b' excute hoga and function 'b' mein console.log("Hello") likha hai.
...toh fir console ek function toh iski bhi stack mein entery create ho jaayegi and jaise hi console.log
wala function execute h jayega....fir console.log ki entry jo hai stack se delet ho jaayegi...
--> and ab function b(); successfully execute ho gaya hai.....fir wapas se control jo hai function 'a' par 
chala jaayega oopar and usmein jahan b(); function call hua tha uske neeche kuch bhi nahin likha hai...toh fir
ab a(); function bhi execute ho chuka hai poora....and ab function 'a' ki entry delete ho jaayegi stack se..jo 
ki 80 line par entry create huyi thi a(); function ki stack ke andar...woh ab jake delete hogi...or ab stack
khaali padi hai currently.

*/