/*
Q-> Suppose koi function hai or woh function kewal 2 arguments hi accept kar sakta hai but agar main extra arguments paas kardun toh kya
    hoga ?

Ans-> Jo extra argumnets hain woh ek 'argument' naam ke object mein store ho jaate hain....or jo extra nahin hain woh bhi
      iss object mein store ho jaate hain...see below example code:-
*/

/*
iss neeche wale example mein kewal 2 parameters ki need thi but maine 2 se zyada de pass kar diye...toh fir javascript mein 
error nahin aayegi....c++, c, jaisi language mein error aa jaati hai...but javascript mein aisa nahin hota....toh jo parameters
pass kiye hain maine, unmein se 2 & 3 jo hai function mein chale jaayenge or dono add hoke return ho jaayega output(i.e., 5)...
baaki jo bache huye 7,6,8 jo hain 'argument' naam ke object mein store ho jaayenge...or 2 & 3 bhi store honge...i.e. saare arguments
jo hain by default 'argument' naam ke object ein store ho jaate hai in the form of key-value pairs and hum inn stored parameters 
ko dekh bhi sakte hain by printing the 'arguments' object...see below:- 
*/


function sum(a, b){
    console.log(arguments); /*OUTPUT:-  0: 2          key(0), Value(1)
                                        1: 3          key(1), value(3)  and so on.
                                        2: 7
                                        3: 6
                                        4: 8
                            */
    return a+b;
}

let ans = sum(2, 3, 7, 6, 8);
console.log(ans); //Output:- 5



//__________________________________________________________________________________________________________________________________>


/*
Q-> Agar main koi bhi argument pass naa karun yaa fir jitni arguments ki requiremnt hai usse kam argumnet paas karun to fir 
    kya output aayega....see below:-
*/

function addition(a, b){
    return a+b;
}

let result = addition(2);
console.log(result); //OUTPUT:-NaN (Not a number)

/*
Output mein NaN isliye aaya kyoki mujhe 2 parameters pass karne thay but maine 1 hi pass kiya hai....toh fir a=2 pass ho jaayega
and b=undefined pass ho jaayega automatically....or fir main a+b(i.e. 2 + unefined) karunga toh fir NaN hi aayega....

agar main koi bhi aparameter pass naa karun toh fir tab bhi NaN aayega output...because undefined + undefined = NaN
*/


//__________________________________________________________________________________________________________________________________>

/*
Q-> main chahta hoon ki jo mere 'arguments' naam ke object mein parameters store ho jaate hain jab main extra parameters pass karta
    hoon....toh main unn stored parameters ko use karna chahta hoon.

Ans-> see below, 'arguments' wale object mein jo mere stored parameters hain, main unko traverse kar sakta hoon using for-of loop
      because objects par for-of loop kaam karta hai...isliye iss loop se hum 'arguments' object ko traverse karenge.      
*/

function add(){
    let totalSum = 0;
    for(let i of arguments){
        totalSum = totalSum + i;
    }
    return totalSum;
}

let output = add(2,3,4,5,6);
console.log(output); //Output:- 20

