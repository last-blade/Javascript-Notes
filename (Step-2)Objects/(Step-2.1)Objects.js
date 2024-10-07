/*NOTE:- Primitive type: number, string, boolean, etc yeh humne step-1 mein padha hai...or yeh primitive type jo hai stack memory mein
        mein create hote hain
        
        Reference Type: Objects, functions, Arrays, etc yeh jo hain heap memory mein create hote hain...and iss heap memory
                        ko access karne ke liye refernce yaa address chahiye hota hai....for example main agar koi array
                        create karta hoon... let arr = [1,2,3,4]; toh yeh array heap memory mein create huyi hai and iss
                        heap memory ko access karne ke liye ek variable hai 'arr' naam se jo ki heap memory ko refer kar
                        raha hai jis location par heap memory mein array padi huyi hai....'arr' variable jo hai address store
                        kiye huye hai jo ki array ke address ko point kar raha hai */




/*
Object:- Object is a collection of key-value pairs.

   curly braces ko object literals bolte hain javascript mein......iska use karke main object create kar sakta hoon for example
  'let myName = {}'  now ihave created the object (i.e. myName) but yeh object empty hai.....
  
  Object ek real world entity hai and iski kuch proprties hoti hain....jaise ki human ek object hai....or human ki kuch properties
  bhi hoti hain....like two hands, two legs,head, two eyes, one head, etc.......

  and iss object ka kuch behaviour yaa fir functioning bhi toh hogi...like human ka behaviour yaa functioning hain eating, speaking, walking, etc

  jaise neeche maine ek object banaya hai jiska naam hai 'rectangle' and iss rectangle ki properties bhi maine mention kari hain
  (i.e. lenght and breadth) and iss object ki kuch funtioning bhi hogi....and iski functioning dikhane ke liye hum object ke 
  andar hi function create kar sakte hain object ki functioning show karne ke liye....draw naa kaa ek function bana diye
  jo ki mere rectangle object kaa behavoiur yaa fir kahein ki functioning ko darsha raha hai.......

  NOTE:- Agar hum object ke andar function ko create kar rahe hain toh fir hum function ko method bolte hain.
*/ 

let rectangle={
    length:1,
    breadth:2,

    draw:function(){
        console.log("Draw the rectangle");
    }
};

console.log(rectangle.breadth);
console.log(rectangle.length); /* rectangle.length se hum object ki property access kar sakte hain */
console.log(rectangle.draw()); /*rectangle.draw() se hum object ke andar wale function ko access kar sakte hain*/


/* Agar humein 10 objects banane hain toh 10 objects ke liye code likhna padega jiski wajah se humara code bulky
ho jaayega i.e. bhot zyada code ho jaayega.....toh humne fir introduce kiye 2 methods jinka use karke hum 
multiple objects create kar sakte hain...2 methods are below:-
How to create objects 1. Factory Function 2. Constructor Function*/

//1. Factory function
    /* how to create factory function ? 
     step-1: pehle ek function banalo jaise hum normally banate hain c++ yaa javascript mein for example function hello(){};
     step-2: or fir uss function ke andar apna object create kardo jo bhi object banana chahte ho
     step-3: object banane ke baad return kardo object 
     
     ab jab bhi main apne hello function ko call karunga toh mera ek naya object create ho jaayega but agar main uss object andar
     ki properties ki values apne hisaab se chahta hoon...like mujhe kabhi age 20 chahiye toh kabhi 21 chahiye...toh iske liye
     main argumants send kar sakta hoon hello function ke through...see line-56 or 57
     */
function createObjects(myName, myAge){
    let person={
        firstName: myName,
        age: myAge,

        // eat:function(){
        //     console.log("I can eat food and this is my behaviour");
        // }

                   //OR
        eat(){
            console.log("I can eat food and this is my behaviour");
        }
        //object ke andar hum function ko 2 tarah se likh sakte hain jaise oopar hai 2 example.          
    };
    return person;
};
let x=createObjects("Prashant", 22); /* ek object create karwa liya maine apne factory function kaa use karke or iss object ko maine
                                        'x' variable mein store kara liya...i.e. ab 'x' ek object hai naa ki variable*/
let y=createObjects("Karan", 23);
console.log("Type of x is: ", typeof x); // Output:- Object
console.log("X object ki property 'firstName' is:",x.firstName); /*'X' object ki property ko access kar rahe hain */
console.log(y.firstName);




//2. Constructor method
function Rectangle(len, brea){
    this.length=len;
    this.breadth=brea;
    this.draw=function(){
        console.log("Draw the rectangle");
    }
}

let a=new Rectangle(6, 4); /*created object "a" using constructor function(i.e. Rectangle(); ) and 'new' keyword ek empty object
                             banata hai...toh iss poori line (let a=new Rectangle(6, 4);) kaa matlab hai ki 'new' keyword kaa use
                             karke ek empty object create kar liya or iss empty object ke liye constructor function (i.e. Rectangle())
                             call kar diya or fir iss empty object mein proprties and behaviour fill kar diya...toh ab empty object
                             empty nahin raha...or iss object ko maine 'a' variable mein store kara liya....but 'a' mein store
                             karaya hai toh fir ab 'a' jo hai object hai naa ki variable */

//"new" keyword se ek empty object create hota hai and "this" keyword se hum current object ko refer karte hain
//yaa fir hum jis bhi current object par kaam kar rahe hain usko refer karta hai yeh this keyword








//<------------------------------------------------------------------------------------------------------------->





/* But we can't apply for-of loop on Object..if we apply for-of loop on object then it'll show an error..or woh
error hogi ki object jo hai iterable nahin hai jaise ki hum "circle" ko iterare karne ki koshish kar rahe hain
for-of loop ke through toh error show karega ki "circle" jo hai iterable nahin hai... lets see below example*/
// for(let x of circle)
// {
//     console.log(x); // it will show an error:--> Uncaught TypeError: circle is not iterable
//}

//But we can iterate the object...lets see below how to iterate object using for-of loop

let rectangle2={
    len:1,
    breadth:2
}

for(let y of Object.keys(rectangle2))//"keys" wale keyword kaa use karke maine bas key print karayi hain object ki
{
    console.log(y);
}

//I want to print the both keys and values of the objects not keys..then we use "entries" keyword insted of "keys"
for(let y of Object.entries(rectangle2))
{
    console.log(y); // toh ab keys bhi print ho gayi hain or values bhi print ho gayi hai
}

/* Agara humein check karna hai ki humare object ki yaa object ke paas property(or yeh property kuch bhi ho sakti 
   hai xyz) yeh wali property exist karti hai ki nahin...lets suppose humein check karna hai ki oopar wale 
   object (rectangle2) mein 'colour' naam ki koi propeerty exist karti hai ki nahin...see below code*/
   
   if('colour' in rectangle2)
   {
    console.log("Colour property is present in rectangle2 object");
   }
   else{
    console.log("Colour property is NOT present in rectangle2 object");
   }





/*<-------------------------------------------------------------------------------------------------------------> */




//Cloning object:-  Three Methods (i) Iteration Method (ii) Assign method (iii) Spread method 


//1.Method ==> "Iteration method" or can say Using 'for-in' loop   
let p={ //Ek 'p' naam kaa object banaya
    age:22, 
    height:6
}

let q={} //fir ek 'q' naam kaa object banaya empty jismein hum 'p' object ko copy karenge 'q' object mein
for(let R in p)
{
    q[R]=p[R];
}

// console.log(q);

p.color="Skin Colour"; /* Humen 'q' object mein ek nayi property add ki hai i.e. 'color' or fir 'q' and 'p'
 object ki key value-pairs ko print karaya toh humne dekha ki dono q and p object dodno alaga alag hain i.e. 
 humne 'p' object ka successfully clone bana diya hai or dono ko hi objects ki memory alag alag allocated hai 
 storage mein heap memory mein....p object ko change karne se 'q' object par fark nahin pad raha hai*/

console.log("P object after adding the new property of color:-",p);
console.log(q); /* P object ke cgange hone se 'q' object par fark nahin pad raha hai i.e. dono independent
objects hain or yun kahe ki dono object ke different address hain heap memory mein */

//<----------------------------------


//2nd Method==>
let source={
    city:"Delhi",
    temp:30
}
let destination= Object.assign({}, source);/* 'source' object ko ek naye object 'destination' naam ke object mein
key-value pairs ko daal diya yaa yun kahe ki 'source' object ko clone kar diya or 'destination' object mein
store kar diya........
Syntax:- 1. Pehle ek object banaya'destination' naam se
        2. Fir "Object.assign" kaa use kiya or iss keyword se hi ek object ke value doosre object mein store
         hongi
        3. Fir parenthesis ke andar curly braces{} daale hain jissey pata chalta hai ki destination naam kaa
          object jo hai woh empty hain..inn curly braces ke bina ek naya object declare nahin ho sakta  
        4. Fir comma lagake uss object naam likh diya jis object ka clone banana hai...or iss 'source' object
           ke key-value pairs empty object i.e. destination naam ke object mein copy ho jaayenge  */
console.log(destination);// Or hum dekh sakte hain ki source object values destion mein store ho gayi hain   
           

//<-----------------------------------

//3rd Method==>
let ingredients={
    fruit:"mango",
    vegetable: "potato"
}
let yy={...ingredients};
console.log(yy);




//<------------------------------------------------------------------------------------------------------------->



/* Garbage Collection:- Jaise ki C,C++ language mein hota hai ki hum dynamically memory allocate karate hain
                        or fir uss allocated memory ko deallocate bhi karana padta hai nahin toh fir humari
                        memory mein space ghira rahega agar deallocate nahin karayi toh....ab aate hain 
                        JavaScript par toh javascript mein Garbage collector tool hota hai jo aise constants
                        yaa aise variables ko dhoondta hai jo ab use mein nahin hain or unke dwara li gayi
                        ya unn variable ne jo space ghera hua hai jo memory gheri huyi hai usko deallocate karta
                        hai garbage collector.....or iss tool par humara koi control nahin hota hai yeh tool
                        automatically invike hota hai background mein*/ 



//<------------------------------------------------------------------------------------------------------------->




/*How to write String as an object..(Lekin humne toh padha hai string ek primitive type hai fir yeh object kiase
    ban gayi string object ban matlab ki primitive type se reference type kaise ban gayi string..see below)*/
let myname = new String("Prashant"); 
console.log(myname); //Output:- [String: 'Prashant']
console.log(typeof myname); //Output:- Object (myname naam ki string jo hai object hai i.e. reference type)  




//<------------------------------------------------------------------------------------------------------------->

//String methods like(spli, toUpperCase, includes, starsWith, endsWith, trim, etc) below:- 

//1. Split method:-
let message = "Hello my name is Prashant";
let words = message.split(" "); /*  Har ek word alag alag ho jaayega jo string likhi huyi hai oopar and har ek
word jo hai "words" nam ke variable mein store ho jaayenge or humne jo split method ke andar ko parameters paas 
kare hain split(" ") toh jo string beech mein space hai ussi ki wajah se har ek word split ho paaya hai i.e. 
split jo kar rahe hain hum woh space ke basis par kar rahe hain....jab jab string mein space aayega woh split ho
jaayegi agar hum space hata dete hain toh fir hum split kar rahe hain lekin har ek character ko  */
console.log(words); //Output:- [ 'Hello', 'my', 'name', 'is', 'Prashant' ]

let characters = message.split(""); // yhan maine koi space nahin diya hai split method ke andar
console.log(characters); /*Output:- [
                                      'H', 'e', 'l', 'l', 'o', ' ',
                                      'm', 'y', ' ', 'n', 'a', 'm',
                                      'e', ' ', 'i', 's', ' ', 'P',
                                      'r', 'a', 's', 'h', 'a', 'n',
                                      't'
                                    ]  Hum dekh sakte hain ki string jo hai characters mein convert ho gayi hai*/
console.log(typeof characters); /* Output:- Object (Lekin humne toh string ko split kiya or string ko hi store
kiya fir yeh Object type kyon show ho raha hai aise toh yeh reference type ban gaya jabki humne toh string ko
split kiya tha or "word" naam ke variable mein store kiya tha splitted words ko toh primitive type(i.i. String)
ki jagah reference type (i.e. object) kyon show ho raha hai)...woh isliye kyoki jab string words mein split hogi
toh woh har ek word array mein store hota hai....or humne store jo hai "word" naam ke variable mein karaya hai
toh word naam kaa  variable jo hai array ban gaya...hum check bhi kar sakte hain ki humara "word" naam kaa
 variable Array hai yaa nahin....see 337 line below:- */
console.log(typeof words); // Output:- Object
console.log(Array.isArray(words)); // Output:- True (i.e. word naa kaa variable ek array hai)
characters = message.split("e");
console.log(characters); /*Output:- [ 'H', 'llo my nam', ' is Prashant' ]...jaise hi "e" character aaya meri 
string split ho gayi....aise hi same oopar walae examples mein tha...jaise hi space aaya meri string split ho 
gayi*/

//2. Replace method:-

console.log(message.replace("Prashant", "Maitreyi")); /* Output:- Hello my name is Maitreyi.....(Prashant naam 
ki jagah Maitreyi naam aa gaya i.e., replace kar diya Prashant to Maitreyi) */




//<------------------------------------------------------------------------------------------------------------->


//Literal template

/*let aboutMe = "My name
 is
 Prashant";

 main aise oopar neeche nahin likha sakta string ko... like ek word ko maine kisi line mein likh diya or 
 doostre ko kisi or line mein like above see the exapmle*/

 /*Lekin main back-ticks kaa use karke oopar wale tareeke se likh sakta hoon apni string ko or issi ko template
 literal kehte hain*/

 let aboutMe = `My name
 is
 Prashant`;
 console.log(aboutMe); /*Output:- My name
                                  is
                                  Prashant
                                (jaise maine apni string likhi hai waise hi outout mein bhi show hogi)*/

//Dynamically bhi cheezein add kar sakte hain kisi given string mein...see below:

let my_name = "Prashant";
let myString = `Hello how are you, my name is ${my_name}`; /*Output:- Hello how are you, my name is Prashant...
                                                             String ke andar maine bas variable kaa naam de diya
                                                            jisse ki variable ki value jo bhi thi string mein 
                                                            aa gayi...but remeber yeh sab back-ticks ke andar
                                                            hi hona chahiye na ki double-quotes ke andar...see
                                                            maine string jo likhi hai wih back-ticks ke andar
                                                            likhi hai i.e(`Hello how are you, my name is ${my_name}`)  */
console.log(myString);




//<------------------------------------------------------------------------------------------------------------->


//Date and Time



let today = new Date(); //Output:- Mon Jul 24 2023 14:49:40 GMT+0530 (India Standard Time)
console.log(today);

//---------------------------------

let mydate = new Date('5 October 2000 8:15');//Output:- Thu Oct 05 2000 08:15:00 GMT+0530 (India Standard Time)
console.log(mydate);

//---------------------------------

let date1 = new Date(2000, 9, 5); //Output:- Thu Oct 05 2000 00:00:00 GMT+0530 (India Standard Time)
console.log(date1);

//--------------------------------
//some inbuilt functions of date and time
today.setFullYear(1947); 
console.log(today); //Output:- Thu Jul 24 1947 14:59:30 GMT+0530 (India Standard Time)

mydate.setMonth(11);
console.log(mydate);// Output:- Tue Dec 05 2000 08:15:00 GMT+0530 (India Standard Time)




































































































