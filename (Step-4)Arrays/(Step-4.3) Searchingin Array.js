// Searching-------------------------------------------------------------------------------------------------------------------------->
//1. indexOf method
let temp = ["a", "b", "c", "d"];
console.log(temp.indexOf("c")); //Output:- 2
console.log(temp.indexOf("e")); //Output:- -1 (minus 1 because element "e" present hi nahin hai array mein)

//2. include method
console.log(temp.includes("a")); //Output:- True (because element "a" exist karta hai temp array mein)
console.log(temp.includes("b", 2)); /*output:- false (elemnt "b" ko search kar rahe han array mein but 2nd index
                                              se naa ki zero index se toh fir 2nd index par yaa aage wale indexes
                                               par elemnt "b" hai hi nahin isliye output "false" aaya hai*/


//------------------------------------------------------------------------------------------------------------------------------------>
/* Agar hum array ke andar Objects insert karde string yaa integer ki jagah..toh kya hum kisi particular element
ko (i.e. object ko) access kar paayenge kyoki array ke andar objects jo hain array ke liye elements hi huye
naa.... isliye main elements bhi bol sakta hoon*/

let box = [ {name:"Prashant", age: 22}, {education: "B.Tech"}];
console.log(box);
/*main dekhna chahta hoon ki yeh object {name:'Prashant', age:22} kis index par hai 'box' naam ki array mein....toh iske
 liye maine oopar 2 methods seekhe hain 'indexOf' & 'includes'... see below:-*/
// console.log(indexOf({name:"Prashant", age: 22})); //yeh error show karega...see below:- 
/* iss se toh poore elements(i.e. objects) print ho gaye array ke lekin mujhe koi particular
element ko print karana...jab humare array ke andar integers yaa fir strings hoti thi tab toh hum access
kar lete thay aasaani se dot operator kaa use karke (like person.name) but jiss array mein objects inserted ho
toh uss case mein hum "callback-function" kaa use karte hain*/

/*Callback-function kaam kaise karta hai pehle yeh seekh lete hain fir code likhenge iska....jaise ki mummy aaj
shahi-paneer banayengi toh mummy ne mujhse (i.e. callback-function se kaha) kaha ki paneer leke aaja toh ab
ghar par shahi paneer banegi yaa nahin woh mere oopar(i.e. callback-function par) depend karta hai, agar main
paneer leke aa gaya toh shahi paneer ban jaygei nahin toh fir nahin banegi..

conclusion:- Mummy(ek function huyi) jo ki mujhse bol rahi hain ki paneer leke aaja(or main bhi ek function)
            hoon i.e. function jo hai doosre function se bol raha hai ki bhai mujhe yeh cheez chahiye or jaldi
            se leke aa i.e. function ke andar as a parameter function hota hai...toh jo andar wala fun. hai
            wahi humara callback function hai jo as a parameter hai and ussi ko callback-fn keh rahe hain
            i.e. function(function()) function ke andar parameneter ke taur par ek function daala hua hai
            toh andar wala function hi humara callback function hai */
let b = box.find(function(box1){  //find() method ke andar jo bhi likha hai woh callback-fun hai 
 return box1.name=="Prashant"; /* jis object kaa naam Prashant hai usko return kardo...agar mein Prashant ki jagah
                              Maitreyi ko search karun array mein toh undefined aayega output kyoki array mein
                              Maitreyi naam kaa object hai hi nahin*/  
} )

console.log(b); //Output:- { name: 'Prashant', age: 22 }

let c = box.find((c1)=>c1.name=="Prashant"); //Arrow function                                               