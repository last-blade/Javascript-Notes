console.log("Hello World Hellooooo");
//hello


let firstName="Prashant";
console.log(firstName);
console.log(firstName.length);
console.log(firstName[firstName.length-1]);

let secondName="     Shah Rukh Khan    ";
console.log(secondName.trim());

let thirdName="prashant";
console.log(thirdName.toUpperCase());

let fourthdName="PRASHANT";
console.log(fourthdName.toLowerCase());

let newName="Prashant";
console.log(newName.slice(0,5));

//Primitive Data Types in JS below:- 

// string 
// numbers
// boolean
// undefined
// null
// BigInt
// Symbol





//'typeof' operator basically variable kaa data-type batata hai
let age=22;
let name="Prashant";
//typeof operator variable kaa data type batata hai number hai,string hai, etc..
console.log(typeof age); 
console.log(typeof name);
// direct bhi data type find kar sakte hain bina variable ke
console.log(typeof"prashant");
console.log(typeof 22);









//Convert number into String dataType
age=age + ""; // bas age ke saath maine string ko add kar diya double cots dekar or ab number jo hai string mein convert ho gaya hai, or "typeof" operator se hum check bhi kar sakte hain ki ab variable kaa datatype kya hai, see below maine type bhi check kiya hai fir 
console.log(typeof age); //age kaa pehle datatype 'number' tha or ab String hai
//second method
let x=22;
x=String(x); //  Number converted into String datatype
console.log(typeof x);












// Convert String datatype into number
let myName= + "prashant";
console.log(typeof myName);
//2nd method
let myStr="Prashant";
myStr=Number(myStr);  //String converted into Number datatype
console.log(typeof myStr);








// String concatenation
let string1 = "Prashant";
let String2 = "Tyagi";
let fullName= string1 + " " + String2;
console.log(fullName);








//template String
let agee=22;
let myname="Prashant";
let aboutMe="My name is " + myname + " and my age is " + agee; // yeh ek normal method hai 
console.log(aboutMe); 
let fullSentence=`My name is ${myname} and my age is ${agee}`; //yeh ek template string method hai, humein ismein variable ko curly braces mein likha hai or usse pehle bas ek dollar sign lagaya hai
console.log(fullSentence);








/*Null variable kaa data-type type check karenge toh 'object' print karega, but Null kyon nahon print karega kyoki datatype to null hai,
reason ke liye neeche explained examples dekhe*/ 
let z; // 'typeof' operator kaa use karke 'z' variable ke data-type kaa pata lagayenge to undefined show karega
console.log(typeof z);
var y; // same hi 'var'  mein show karega 'let' ki tarah
//const item3; // but 'const' mein humein variable ko initialize karna hi padta hai i.e. value deni hi padti hai nahin toh error show karega execution ke time
let a=null;
console.log(typeof a); // Ismein jab variable 'a' kaa type print kara rahe hain toh 'null' aana chahiye but null ki jagah object print kar raha hai...toh yeh ek bug hai error hai javaScript mein, toh yeh error theek nahin ki hai developers ne because agar ayeh error change kari toh jitne bhi javascript ke frameworks hain unko bhi change karna padega jo ki ab possible nahin hai....toh jo bhi JS mein code karta hai iss error ko dimaag mein rakhte huye code karta hai











//BigInt datatype
//BigInt dataype ek badi integer value ko store karane ke liye use hota hai
let number= BigInt(27); //initialization of BigInt variable
          // or
let myNumber=8n;  // 2nd method of initializing the variable in BigInt datatype by putting the 'n' after the value       
console.log(number);
console.log(myNumber);
//BigInt ko BigInt variable ke saath hi add kar sakte hain agar normal number se add karayenge to error aayegi
console.log(number + myNumber);











//Comparison operators <, >, <=, >=, = =, etc..................................................................................
let b=5;
let c=8;
console.log(b>c);  //output will be 'false' kyoki 'b' variable 'c' se bada nahin hai

//Difference b/w double equals to(==) and triple equals to(===)....see below:- 
let num1 = "7";
let num2 = 7;
console.log(num1 == num2); //Output mein 'True' aayega..... num1 string datatype hai or num2 number datatype hai tab bhi dono equal hain
                           // baaki or langueges mein 'false' output aayega kyoki c++, c, java mein datatype check hota hai or num1 and
                           // num2 kaa datatype alag hai, but JavaScript mein hi datatype check nahin hota isliye 'True' output aayega 

 /*Agar triple equal to (===)use karte hain to strict checking hoti i.e. iss baar datatype bhi check hoga input value kaa.....but double
 equals to(==) mein bas value check hoti hai datatype check nahin hota....isiliye sabse oopar wale case mein 'true' output aaya tha*/                          
console.log(num1===num2);


/* Not equals to(!=) Vs not equals to equals to (!==) */
console.log(num1 != num2);
console.log(num1 !== num2);








// If-else condition
let myAge=22;
if(myAge>=18)
{
    console.log("You can play the game");
}
else{
    console.log("Can not play the game");
}



/* Falsy values....aisi values jo if condition ko false kar deti hain or else wali statement execute hoti hai, following are the falsy values:-
false, zero(0) ,null, "", undefined */


/* falsy value put kari hai humne 'k' variable mein jisse ki if-condition false ho gayi hai or else wali statemnet chal gayi hai*/
//Example-1
let k="";
if(k)
{
    console.log("K variable is not initialized with falsy value");
}
else{
    console.log("K variable is initialized with falsy value") 
}

//Example-2

k=0;
if(k)
{
    console.log("K variable is not initialized with falsy value");
}
else{
    console.log("k variable initialized with falsy value");
}
//Example-3
k=null;
if(k)
{
    console.log("K variable is not initialized with falsy value");
}
else{
    console.log("k variable initialized with falsy value");
}
// bas aise hi agar baaki jo bachi falsy values hain (false, undefined) same result aayega or else wali statemnt execute hogi

/*Truthy values are:- true, abc, 1, -1......inn values se agar variable ko initialzie karenge toh if-condition true hogi or if wali statement hi chalegi naa ki else wali*/

//Example-1

let p=true;
if(p)
{

    console.log("Variable p is initialized with truthy variable");
}
else{
    console.log("P variable initialized with falsy value");
}

//Example-2
 p=1;
if(p)
{

    console.log("Variable p is initialized with truthy variable");
}
else{
    console.log("P variable initialized with falsy value");
}

//Example-3
p = -1;
if(p)
{

    console.log("Variable p is initialized with truthy variable");
}
else{
    console.log("P variable initialized with falsy value");
}

//Example-4
p="abc";
if(p)
{

    console.log("Variable p is initialized with truthy variable");
}
else{
    console.log("P variable initialized with falsy value");
}







let my_name="Prashant";
if(my_name[0]=="P")
{
    console.log("Your name starts with P");
}
else{
    console.log("It is false");
}


/*by using 'prompt' keyword we can take input from the user
and 'prompt' ke through liya hua input jo hao woh String datatype mein hota hai....like maine user se input liya 15 toh iss input kaa data
type String hoga i.e. "15" */
// let input1=prompt("Give any number");
// console.log(input1);

/*agar iss string data type ko integer mein convert karna hai toh prompt se pehle + sign laga do...jaise ki humne oopar seekha datatype
ko kaise convert karte hain*/

// let input2= +prompt("Give input 2");
// console.log(typeof input2);















// nested if else....else if
let temp=45;
if(temp===25)
{
    console.log("Normal temperature outside");
}
else if(temp<15)
{
    console.log("cold temperature outside");
}
else if(temp>=30)
{
    console.log("Too hot temperature outside");
}
else{
    console.log("Average temperature outside");
}



//switch case

let day=2;
switch(day)
{
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    case 6:
        console.log("Sunday");    
        break;
    default:
        console.log("Invalid Day");                        
}




//LOOPS
//for loop and while loop same as C++, c, java

for(let i=1; i<=10; i++)
{
    console.log(i);
}

/*console.log(i);  /* 'i' variable jo hai for loop ke andar hai isliye 'i' ki value for loop se bahar print nahin ho sakti but hum agar 
                    'i' variable ko 'var' ka use karke declare kare toh var se jo declared variable hai uska scope global ho jaata hai
                    'let' se declared variable keval ussi scope mein rehte hain jahan declare kiye hain but 'var' jo hai globally declare
                    karta hai variables ko jisse ki uss variable ki value ko scope se bahar bhi access kar skate hai hain*/


for(var j=1; j<=10; j++)                    
{
    console.log(j);
}


console.log("Yeh j ki value for loop se bahar bhi acces kar li humne kyoki for loop ke nadar humne J variable ko 'var' kaa use karke declare kiya hai", j);

























































































































































































