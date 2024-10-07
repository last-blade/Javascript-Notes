let a = document.getElementById('box1');
console.log(a); //OUTPUT:- <div id="box1" class="box"></div>
console.log(typeof a); //OUTPUT:- Object (iska matlab 'getElementById' wala method ek object return karta hai)



let b = document.getElementsByClassName('box');
console.log(b);
console.log(typeof b); /*OUTPUT:- Object (iska matlab 'getElementsByClassName' wala method ek 'array-like-object' return
                                        karta hai jisko hum HTMLCollection kehte hain) 
                                    */

let c = document.getElementsByTagName('div');
console.log(c);
console.log(typeof c); /*OUTPUT:- Object (iska matlab 'getElementsByTagName' wala method ek 'array-like-object' return
                                    karta hai jisko hum HTMLCollection kehte hain) 
                                */                                         

//--------------------------------------------------------------------------------------------------------------------------------->>


/*Oopar wale teeno methods jo hain multiple objects ko return karte hain i.e. jaise maine oopar 'box' naam ki class wale
  element ko fetch kiya tha....but jitne bhi elements ka naam class hoga woh saare elements return kar dega....lekin agar
  mujhe koi ek hi element chahiye naa ki multiple....toh iske liye hum 'querySelector' method kaa use karte hain
*/

let d = document.querySelector('.box');
console.log(d); /*jo html mein sabse pehla element hoga jiski class kaa naam 'box' hoga wahi return hoga...i.e, jitne bhi
                   elements kaa naam calss hoga woh saare return nahin honge...kewal ek element return hoga jo HTML document
                   mein shuru mein dikhega i.e. first one wala element return karega jsiki claas kaa naam 'box' hoga.
                */
console.log(typeof d);  //OUTPUT:- Object                                   