//For-in Loop:-we can iterate the object using for-in loop....i.e. agar objects ko iterate karna hai toh fir for-in loop use karte hain.

let person = {
    name: 'prashant',
    college: 'ABES',
    age: 23
}

for(let i in person){
    console.log(i); //printing the keys of the object, OUTPUT:- name, college

    console.log(person[i]); //printing the values of the keys, OUTPUT:- prashant, ABES

    console.log(i, person[i]); //printing both key and values. 
}
//----------------------------------------------------------------------------------------------------------------------------------->


/*For-of Loop:- For-of loop jo hai arrays, maps, etc. wagerah par hi laga sakte hain...objects par nahin laga sakte yeh wala
                loop...objects ke liye toh for-in loop hi use karte....lekin agar main for-of loop objects ke oopar ek
                jugaad karke laga sakta hoon, see below:-*/

console.log("For-of Loop below:--");
for(let i of Object.keys(person)){
    console.log(i); //printing keys of person object above

    console.log(i, person[i]);//printing both key and values of person object above.
}

/*
    Object.entries lagane se key and values dono print ho jaayengi.....and oopar wale mein maine bas 'Object.keys' lagaya tha
    isliye kewal keys print ho rahi thi or values ko print karane ke liye maine alag se 'console.log' kaa use kiya hai oopar...
    lekin Object.entries se key-velue pairs print ho rahe hain ek saath...see below:--
*/
for(let x of Object.entries(person)){
    console.log(x);
}

//----------------------------------------------------------------------------------------------------------------------------------->


//For-of Loop on Array:-
let arr = [10,20,30,40,50];

for(let i of arr){
    // console.log(arr[i]); //it will show undefined
    console.log(i); //Correct way!
}