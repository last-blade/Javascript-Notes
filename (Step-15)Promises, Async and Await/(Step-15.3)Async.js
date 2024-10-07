async function hello(){
    return "Prashant";
}
hello();

/*
"async" keyword kaa use karke maine ek simple function ko async bana diya...and "async" function hamesha Promise return akrta hai....
iske liye console mein jaake hello(); type karke enter karenge toh fir wahan dikh jaayega ki ek Promise return hua hai...maine neeche
bhi console se output ko copy karke yahan laga diya hai...see below:-

Promise {<fulfilled>: 'Hello'}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "Hello"


Promise fulfilled hai, i.e. resolved and Protoptype is Promise, PromiseState is fulfilled, and PromiseResult is "Prashant"
*/