/*
Suppose mein kisi website par hoon or jab main kisi bhi element or tag ke oopar click karta hoon toh fir website ko pata chal jaata
hai ki main kis 'tag' par click kiya hai....suppose ek text likha hua hai 'h1' tag ke andar and jab main uss text par click karta
hoon toh website ko pata chal jaata hai ki maine kis text par click kiya hai or tag kaunsa hai......toh yahi cheez pata karne ke
liye 'target event' property hoti hai iski help se hum pata laga sakte hain...
*/


let container = document.querySelector('.container');

container.addEventListener('click', function(x){
    console.log('Text written on the button tag is: '+ x.target.textContent) 
    console.log('Tag name: '+ x.target.tagName);
});

/*
-->main jab button element par click kar raha hoon toh toh fir jo text content likha hai button tag ke andar woh print ho raha hai
see line no.12

-->or main chahta hoon ki maine jiss element yaa tag par click kiya hai woh mujhe pata chal jaaye...toh uske liye maine code 
   likha hai 'x.target.tagName' see line no.13     


-->conclusion:- toh main individually kisi bhi element ko target kar sakta hoon or unn element kee andar kaa content bhi access
                kar sakta hoon or tag name bhi pata kar sakta hoon
*/