async function mausam(){

    let DelhiMausam = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("Too cold in Delhi")
        }, 100);
    });

    let MumbaiMausam = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("Too hot in Mumbai")
        }, 200);
    });

    let dM = await DelhiMausam;
    let mM = MumbaiMausam;

    return [dM, mM];
}

mausam();

/*
line no.16 nahin chalegi jab tak ki line 15 execute naa ho jaaye...beacuse 15 line no. par "await" keyword kaa use kiya hai....and 
await keyword tabhi chalega jab humra function "async" hoga...and maine line no.1 par function ko "async" bana diya hai.
*/





/*Async & await:- jab multiple asynchronus code run kar rahe hote hain  suppose p1 and p2 are two promises..or
                  hum chahte hain ki jab p1 promise complete ho tabhi p2 promise chalna chahiye....toh iss cheez
                  ke liye hum "await" keyword kaa use karte hain like "await p1" toh p1 ke execute hone ke baad
                  hi p2 chalega.....lekin yeh cheez toh hum then() wale method ka use karke bhi achieve kar paa
                  rahe thay ki agar mujhe ek promise ke execute hone ke baad hi doosra promise chalana hai..toh
                  fir yeh "await" kyon aaya? woh isliye aaya...maanlo agar mere paas 50 promises hain likhe 
                  huye or ek ke baad ek promise ko chalana hai mujhe..i.e, p1 ke baad p2 chalega fir p3, fir p4
                  aise karte karte p50....but aise mujhe 50 baar hi then() method kaa use karna padega or aise
                  complicate ho jayega code, readability kam ho jaayegi code ki...toh aise case mein main fir
                  "await" keyword kaa use karunga 
*/