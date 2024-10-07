let element = document.getElementById('txt');

element.style.color = 'crimson';
element.style.backgroundColor = 'gray';

/* .style wale method se kewal ek property mein hi changes kar paa raha hoon CSS ki....agar mujhe ek baar mein hi kayi saari
properties mein changes karne hain CSS ki.. toh fir uske liye hum cssTeXT use karte hain see below:- */

element.style.cssText = 'color:green; background-color:yellow; font-size:50px;';