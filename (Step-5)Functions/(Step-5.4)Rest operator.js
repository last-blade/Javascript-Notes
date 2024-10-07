/*
Step-5.3 mein humne dekha ki kaise hum extra parameters ko pass kar sakte hain kisi function mein and woh parameters jo hain
        ek 'arguments' naam ke object mein by-default store ho jaate hain....but hum chahe toh Array mein bhi store kar sakte hain
        inn parameters ko....by using rest operator(...) and suffix mein apni array kaa naam dedo koi,,,jaise maine 'arr' diya hai..
        see below:--
*/


function sum(...arr){
    console.log(arr); //Output:- 5,7,8,4,3
}

sum(5,7,8,4,3);

//--------------------------------------------------------------------------------------------------------------------------------->

/*
Q-> Agar mein rest operator bhi laga doon or function ki definition mein paramters accept karne wale variable bhi daal doon toh
    fir kya hoga ?

Ans--> neeche dekh sakte hain....ki 5,6 jo hain variable 'a' & 'b' mein chale gaye or baaki ke bache huye 4 parameters (7,8,9,4)
        jo hain arr1 mein store ho gaye.....peeche stpe-5.3 mein humne dekha ki 'arguments' naam ke object mein saare parameters
        store ho rahe thay...but ismein jo extraneous parameters hain wahi store ho rahe hain bas array mein...and ek baar rest
        operator laga diya toh fir uske baad hum koi extra variable nahin pass kar sakte function definition mein....like ek function
        hai:->  funtion sum(a, b, ...arr, num) toh yeh error show karega...because kuch parametrs toh a & b mein store ho gaye...
        and baaki ke bache huye rest operator kaa use karke 'arr' naam ki array mein store ho gaye toh ab koi bhi parameter bacha hi
        nahin hai toh fir humne 'num' variable jo diya hai usmein kuch bhi store nahin ho sakta isliye error dega JS engine
*/


function addition(a, b, ...arr1){
    console.log(arr1); // Output:- [7, 8, 9, 4]
}

addition(5,6,7,8,9,4);