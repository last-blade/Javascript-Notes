/*
String toh humne padha tha ki ek primitive type hai....and Objects toh reference type hote hai toh fir String object kaise ban gaya...
i.e. object ban gaya toh matlab string reference type ban gaya...but humne toh primitive type padha tha....?

Answer:- string ko hum object mein bhi convert kar sakte hain...see below:-
*/

let name = new String ('Prashant'); // new keyword and 'String' constructor function kaa use karke maine 'name' string ko object bana diya.

console.log(typeof name);

console.log(name.includes('Pra')); //OUTPUT:- True


//-----------------------------------------------------------------------------------------------------
console.log(name.startsWith('Pras')); //Output:- True
console.log(name.startsWith('ras')); //Output:- False
console.log(name.endsWith('ant')); //Output:- True
//------------------------------------------------------------------------------------------------------



console.log(name.indexOf('t'));//Output:-7



//------------------------------------------------------------------------------------------------------
console.log(name.toUpperCase());
//------------------------------------------------------------------------------------------------------
let str = '   Hello   ';
console.log(str.trim()); // yeh method prefix and suffix mein jitne bhi spaces hain unko delete kar dega.
//------------------------------------------------------------------------------------------------------
let s = 'Hello';
console.log(s.replace('He', 'Ce'));
//------------------------------------------------------------------------------------------------------
let sentence = "This is my first sentence";
let words = sentence.split(' '); /* split method meri string ko split kar deta hai...bas humein condition mention karni hoti hai
                                    ki kis base par mujhe apni string jo hai split karni hai...like maine spaces(' ') ke 
                                    basis par string ko split kiya hai....'the', 'is', 'my', 'first', 'sentence'....yeh maine
                                    spaces ke basis par har ek word ko alag kar diya...i.e.jab bhi space aayega toh meri string
                                    split hoti rahegi or fir maine ek variable mein store akra liya splitted string ko...
                                    or yeh 'words' wala variable ek array ban jaayega */
console.log(words);
console.log(words[2]);
//------------------------------------------------------------------------------------------------------

