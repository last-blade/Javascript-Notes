let obj1 = {a:1, b:2};

let obj2 = {b:4, c:5};

let obj3 = {d:1, e:2};

let combinedObjects = Object.assign(obj1, obj2, obj3); /*shuru mein obj1 likha hai isliye obj2 and obj3 yeh dono objects obj1
                                                        ko assign ho gaye i.e. obj2 and obj3 ki jitni bhi properties hain woh
                                                        obj1 mein copy ho gayi hain or obj1 ki properties toh rahengi hi
                                                        already...or yeh cheez humne neeche check bhi karli hai ki obj1 jo
                                                        hai combineObjects ke equal hai ki nahin.
                                                    */

console.log(combinedObjects); //OUTPUT:- {a: 1, b: 4, c: 5, d: 1, e: 2}

console.log(combinedObjects == obj1); //OUTPUT:- True



/*
NOTE:- The Object.assign() method only copies enumerable and own properties from a source object to a target object.
        It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters.
*/

