/*
Main chahta hoon ki ek naya 'tag' inject kkarun HTML code ke andar suppose main 'h2' tag add karna chahta hoon HTML code mein...
and yeh h2 tag ko 'container' naam ki class mein inject or insert karna chahta hoon....'container' class already bani huyi hai
HTML code jake dekhe....
*/

//Step-1:- Inject karne se pehle 'tag' or elemet ko create bhi toh karna padega and for this we use 'document.createElement' method
let extractedClass = document.querySelector('.container'); //sabse pehle main uss class ko extract kar liya jiss class ke andar mujhe element inject karna hai
let headElement = document.createElement('h2'); //created a 'h2' tag...ab isko inject bhi toh karna hai HTML code mein 'container' class ke andar

//Step-2:- Injecting the 'h2' tag i.e. headElement using appendChild method...see above line no.9
extractedClass.appendChild(headElement);


//ab maine uss h2 tag mein text daal diya...sabse pehle ek text create kiya by using createTextNode method, and the append kar diya h2 tag mein.
let text = document.createTextNode('This is h2 tag created by Javascript');
headElement.appendChild(text);

                          //OR

headElement.textContent = 'This h2 tag content is created using JS';


/*
but jab hum koi bhi naya Tag create karke fir usko HTML code mein inject karte hain (see line no.11) toh fir woh element jo hai
last mein jaake insert ho jaata hai.....i.e., jaise maine oopar ek container class mein daala hai h2 tag toh fir yeh h2 tag jo
hai last mein jaake insert ho jaayega....i.e. see below line no.32:- but agar main apni marzi se tag ko kahin par bhi daalna chahta hoon
toh fir uske liye see step-7.4.2 wala folder

    <div class="container">
        <p>Prashant</p>
        <h2></h2>
    </div>

*/
