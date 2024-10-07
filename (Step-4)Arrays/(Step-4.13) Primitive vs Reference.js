//Primitive type vs Reference type
let num1=6;
let num2=num1;
console.log(num1);
console.log(num2);
num1++;
console.log("After updation in num1");
console.log(num1);
console.log(num2);
/*primitive type mein num1 ko increment kiya 6 se 7 kar di value num1 ki but num2 ki value change nahin huyi
  jabki num2 ko toh num1 ki value assign hai....i.e. num1 ki value ko num2 mein daal rakha hai or num1 ki value
  change huyi 6 to 7 but num2 ki nahin huyi*/
  
let arr1=["mango", "apple"];
let arr2=arr1;
console.log(arr1);
console.log(arr2);
arr1.push("Banana");
console.log("After updating array1");
console.log(arr1);
console.log(arr2);
/*ismein humnein bas array1 mein 2 items insert kiye hain or array2 mein fir array1 ko daal diya fir humnein
ek naya item insert kar duya (Banana) array1 mein or fir doabara se print karaya arra1 or aaray2 ko...toh
humein dikha ki array 2 mein bhi woh item(Banana) insert ho gaya toh yeh cheez reference ki wajah se huyi
jaise ki array1 ka ko reference addres hai woh array2 ko bhi assign hai jis wajahs se jo bhi change hum aray1
mein karenge woh change array2 mein bhi aayenge kyoki array1 ke items kaa address array2 ko assign hai...

Conclusion:-
i.e., jab hum ek array ko doosri array mein assign karte hain toh uss doosri array ko first wali array ke 
items kaa address assign hota hai naa ki uss first wali aaray ke elements jisse ki jo bhi change array1 
mein honge wahi change array2 mein bhi honge kyoki jab array1 mein changes aayenge or fir aaray2
ko hum print karayenge toh array2 jo hai aaray1 ke addres par jaayegi or whaan jo bhi updated array1 hogi
uske items ko khud mein lekar parint kara degi.....but primitives mein addres nahin hota assign jaise
ki oopar num1 and num2 mein jo hua hai i.e. num2 mein num1 ki value assign huyi hai naa ki num1 kaa
address....but array mein address assign hota hai*/

//suppose 2 arrays
let x=[1,2,3,4];
let y=[1,2,3,4];
console.log(x===y); //Output:- False
/* humnein check kiya ki array x jo hai aaray y ke equal hai ki nahin.....or output false aaya lekin dono aaray
toh same hi dikh rahi hai toh output true kyon nahin aaya ? True isliye nahin aaya kyoki dono array alag
alag hain jab humne compare kiya dono arrays ko equal hain ki nahin toh check karte samay array ke elements
ko check nahin kiya jaayega because aaray ke case mein balki dono ke addres ko check kiya jaata hai....array x
and aaray y done ke address alag alag hain heap memory mein toh dono kaa address check hua or dono ka address
alag hai ek doosre se isliye Output false aaya.....yeh fark hota hai refence type or primitive type mein
...primitive type mein value check karte hain ki same hai yaa nahin */

let array_X=[1,2,3,4];
let array_Y=array_X;
console.log(array_X===array_Y); //Output:- True
/* output true isliye aaya kyoki dono arrays kaa address same hain....array_X kaa addres array_Y ko assign 
kiya hau hai toh dono array same maani jaayengi...dono array same hain woh isliye nahin ki dono arrays 
mein same elements lie karte hain....woh isliye kyoki dono arrays kaa addrss same hain meomry ke andar...
or jaise ki oopar bataya array ke case mein address ke aadhar par output aata hai naa ki unke andar 
elemets jo hai unke aadhar par*/


/* but agar humein ek aaray ke items ko doosri array mein daalna hai but doosri aaray kaa address bhi alag hona
chahiye toh iske liye hum "slice" method kaa use karenge..basically slice method ek nayi array banake dega
or dono hi array kaa address bhi alag hoga...jissey ki hum first array mein changes karenge toh second
array mein changes nahin aayenge...jo cheez oopar ho rahi toh humne usko slice method se overcome katr diya*/
let arrayX=[1,2,3];
let arrayY=arrayX.slice(1); //index no.1 se jitne bhi items hain woh saare items arrayY mein aa jaayenge or yeh array independent hogi i.e. iss array kaa arrayX se kuch lena dena nahin hoga i.e. arrayX mein cganges karenge toh arrayY mein changes nahin aayenge
console.log(arrayX);
console.log(arrayY);
arrayX.push(4);
console.log(arrayY);
/*hum check bhi kar sakte hain ki dono arrayX and arrayY alaga alag hain..agar output false aaya toh
dono aaray ek doosre se alaga hain iska matlab hai ki dono aarays kaa address different hai..see below:*/
console.log(arrayX===arrayY); //Output: False


/*3 methos of cloning the array and cloned array kaa address bhi different hoga
1. "slice" operator for cloning the array(see above)
2. "concat" operator for cloning the array
3. spread operator("...") use 3 doots for cloning the array*/

//2nd method "concat" operator
let aa=[1,2,3,4];
let bb=[].concat(aa);
console.log(aa);
console.log(bb);
//3rd method Spread Operator(...) or yahi method sabse zyada use kiya jaata hai because of easy syntax.
let cc=[...aa]; // array "aa" ke elements ko array "cc" mein oush kar diya 3 dots operator kaa use karke
console.log(cc);

arrayY=arrayX.slice(1).concat([4,5,6]); /* slice method kaa use karke humne arraX ke itmes ko arrayY mein 
                                        push kar diya or 3 elemets or push kar diye arrayY mein (i.e. 4,5,6)*/

arrayY=[].concat(arrayX, [7,8,9,10]); /* doosre tareeke se humne arrayX ke itmes ko arrayY mein push kar diya
                                       or saath hi arrayY mein 7,8,9,10 ko bhi push kar diya*/
console.log(arrayY);



let arrayA=[1,2,3];
arrayB=[...arrayA, "item1", "item2"];// arrayA ke elemets arrayB mein daal diye or item1 and item2 bhi daal diye 
console.log(arrayB);

arrayB=[...fruits, ...arr2];
console.log(arrayB);