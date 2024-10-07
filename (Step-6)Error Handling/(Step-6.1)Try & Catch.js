/*
Que-> Error handling hum kab use karte hain ?

Ans-> Suppose maine ek website create ki...and kisi error ki wajah se meri site loading kiye jaa rahi hai or screen par kuch
        show hi nahin ho raha hai...bas loading hoti jaa rahi hai.....toh aise case mein main user experience ko achchha karne
        ke liye ek cheez dikha dunga screen par....ki agar 15 second se zyada time lag raha hai meri website ko open hone mein
        toh fir ek message show ho jaaye screen par ki "our server is facing problem, visit us later"...toh fir isse
        user ko pata chal jaayega ki baadmein open karke dekhunga iss website ko.....agar main yeh message show nahin karat toh fir 
        user jo hai baitha hi rehta intezaar mein ki kab oepn hogi website....toh aise cases mein 'error handling' kaa kaam
        aata hai.
*/

/*
jiss code mein error aane ki possibilities hain uss code ko hum 'try' block mein write karte hain and 'catch' block mein uss 
error kaa solution likhte hain.
*/

/*Example-1:- 'try' block mein maine code likha hai....but mere iss code mein 'x' variable defined hi nahin hai...toh fir error aayegi
                or jaise hi erorr aayegi mere 'try' block wale code mein waise hi ekdum se mera 'catch' block run ho jaayega
                or 'try' block kaa jo code hai woh poora execute nahin hoga, jahan error aayi hai agar uske neeche or kuch
                code bhi likha hai toh fir woh neeche wala code execute nahin hoga.*/
try{
    console.log(x);
    console.log("Try block");
}

catch(err){
    // alert("'x' variable is not defined");
    console.log("'x' variable is not defined", err);
    // console.log(err);
}

finally{
    console.log("I'm finnaly block and I will run everytime");
}