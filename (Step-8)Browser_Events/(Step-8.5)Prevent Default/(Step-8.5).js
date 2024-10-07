//preventDefault(); :-
/*
jab bhi humein agar event listener ko rokna hai like hum kisi link par click kare toh woh link kaam naa kare
like maine ek facebook kaa link banaya html file mein or fir main chahta hoon ki yeh link kaam naa kare click
karne par...toh issi kaam aata hai preventDefault() method.....see below for example:- 
*/ 


/*
The preventDefault() method is a JavaScript function that belongs to the Event interface. It is used to prevent the default action
of an event from occurring.

Here's how it works:

When you handle an event in JavaScript, such as a click event on a link or a submit event on a form, the browser typically
performs some default action in response to that event. For example, clicking on a link navigates to the URL specified in
the link's href attribute, or submitting a form sends the form data to the server and reloads the page.

By calling preventDefault() on the event object within your event handler function, you can prevent this default action from
happening. This allows you to implement custom behavior for the event without the default action interfering.
*/




let thirdAnchorTag = document.getElementById('thirdLink');
//main thir wale link ko band karna chahta hoon i.e. third wale anchor tag ko band karna chahta hoon
// let thirdAnchorTag = allLinks[2];

thirdAnchorTag.addEventListener('click', function(x){
    x.preventDefault(x);
    alert('Third wala anchor tag wala link kaam nahin karega beacuse preventDefault method laga rakha hai third wale anchor tag par')
});




/* toh maine facebook ke 3 anchor tag banaye or unn teeno mein facebook kaa link pada hua hai
fir maine querySelector lagake maine saare anchor tags jo hain "allLinks" ke variable mein store kara liye
or fir maine uss array mein se third anchor tag ko "thirdAnchorTag" naam ke variable mein store kara liya
fir maine thirdAnchorTag  par addEvenetListener methoda laga diya or uske andar maine prevenetDefault() methoda apply
kar diya jisse ki main jab bhi third anchor tag par click karunga toh woh link kaam nahin karega */
