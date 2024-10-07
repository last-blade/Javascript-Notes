/*Object kaa clone kaise banaye:- There are 3 methods of Object cloning, (i)Iteration method(loop meethod)
                                                                         (ii)Assign method
                                                                         (iii)Spread method
*/

//(i)Iteration method----------------------------------------------------------------------------------------------------------------->

let obj1 = {
    name: 'prashant',
    address: 'delhi',
    age: 23
};

let obj2 = { };

for(let i in obj1){
    obj2[i] = obj1[i];
}

console.log(obj2);


//(ii)Assign method----------------------------------------------------------------------------------------------------------------->

let obj3 = Object.assign({ }, obj1); /*Object (i.e. obj1) ko maine ek empty object obj3 ein copy kar diya...jo maine empty curly
                                        braces lagaye hain '{ }' woh ek empty object ko darsa rahe hain.....and uske baad mujhe
                                        jis object ko copy karna hai uss object kaa naam likha hai i.e. obj1 and fir obj1 copy
                                        ho jaayega ek empty object mein or maine uss empty object kaa naam obj3 rakh diya.
                                    */
console.log(obj3); 


//(ii)Spread method(...)------------------------------------------------------------------------------------------------------------->

let obj4 = {...obj1};
/* spread operator(...) 3 dots hoti hain or maine obj1 ko copy kar liya obj4 mein using spread operator */

console.log(obj4)