/*Agar hum koi bhi cheez parallely execute karna chahte hain javascript ke andar background mein...toh aise cases
mein hum promises kaa use karte hain...and promises asynchronous hote hain
example:- jaise ki mujhe birthday ke liye cake chahiye...toh main cake shop par jaunga or usse cake babane ke 
bolunga....yaa toh main cake shop par khada rahunga 1 ghante tak yaa fir main ghar par jaake apna koi kaam kar
lunga or 1 ghante baad jaake main apna cake le lunga cake shop par jaake.....toh main wahan cake shop par toh
khada nahin hounga...main toh ghar jaunga or 1 ghante apna kuch kaam karunga or mera background mein cake shop
par cake ban raha hai...toh yahan 2 kaam ho rahe hain parallel...main ghar jaake apna kaam bhi kar raha hoon
or mera cake bhi ban raha hai cake shop par....toh yeh asynchronous hai promises....and yeh mera cake zaroori
nahin hai ki 1 ghante mein banke taiyaar ho jaayega cake, 2 ghante bhi lag sakte hain cake banne mein...matlab
cake wale ne yeh promise kar diya hai ki cake ban jaayega lekin yeh pakka nahin hai ki 1 ghante mein hi ban 
jaayega...but yeh promise hai ki ban jaayega cake....

--> toh humein 2 baat pata chali Promise ke baare mein:- (i)ek toh yeh asynchronous hai promise and (ii) doosri
    baat yeh pata chali hai ki koi time fix nahin hai ki kab execute hoga code..bas yeh pata hai ki promise 
    fullfill hoga

-->A Promise is in one of these states:
    pending:- initial state, neither fulfilled nor rejected.
    fulfilled:- meaning that the operation was completed successfully.
    rejected:- meaning that the operation failed.
*/

/*Conclusion:- Jab hum async code likhte hain toh fir woh code successfully excute hua yaa fail hua...yeh cheez Promise darshata hai.
                toh fir jab bhi hum async code likhte hain toh promise kaa use karna chahiye, it's a best practice.
                The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
*/

//Syntax:- promise_name = new Promise(function(resolve, reject)){};


//Ex-1
let meraPromise = new Promise(function(resolve, reject){
    console.log("I'm inside promise");
    resolve(1998);
});
console.log("Pehla promise");


//Ex-2
let x = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Hello i'm second promise");
    }, 3000);
    resolve(2233);
    // reject(new Error('Error aayi hai'));
});



/*
Agar mera promise resolve yaa reject ho jaata hai toh fir mere paas 2 methods hain then() and catch()...... then() ko hum 
tab use karte hain jab promise resolve ho jaaye i.e.successfully chal jaaye bina error ke.....and catch() hum error aane par
lagate hain.

-->oopar jo promise hai 'x' woh fullfill ho gaya i.e. resolve ho gaya...toh ab main kuch or karna chahta hoon
uss promise ke oopar toh fir kuch karne ke liye main thrn() kaa use karunga because promise resolve hua hai....agar 
resolve nahin hota toh fir catch() use karte but resolve ho gaya hai toh fir the() kaa use karenge...see below:-
*/
x.then((value) => {console.log(value)});

//agar promise fullfill nahin hota toh fir main catch() lagata
x.catch((value) => {console.log(value)});
