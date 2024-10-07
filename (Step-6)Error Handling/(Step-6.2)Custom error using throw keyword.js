/*
Throw:- iss keyword kaa use karke hum khudki custom error display kara sakte hain user ko....suppose maine ek government API lagayi huyi
        hai apni website mein...and Govt. ke kuch predefined error codes hote hain like 404 code aaye toh fir screen par
        show kar dena ki internet connectivity problem hai.....toh jab main API se data fetch kar raha tha toh fir error
        code 404 aa jaata hai...or uss API mein pehle se hi likha hai ki 404 error code aaye toh fir ek error show
        kar dena display par ki internet slow hai aapka.... aise hi main throw kar sakta hoon apni custom error. 
*/


let errorCode = 404;

if(errorCode == 404){
    throw new Error("Please check your internet connectivity");
}

/*
Output:- Uncaught Error: Please check your internet connectivity
*/