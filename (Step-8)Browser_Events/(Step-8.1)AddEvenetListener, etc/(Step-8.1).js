let element = document.getElementById('box');
element.addEventListener('click', function(){
    element.style.backgroundColor = 'orange';
    console.log("Clicked on Box");
});

/*
Syntax:- eventName.addEventListener(event-to-listen-for, action or function);
        oopar jo eventListener lagaya hai usmein eventName, evenet-to-listen-for, and action... kaun kya hai neeche likha hai...
        eventName-->element(jiss par event listener lagaya hai)
        event-to-listen-for-->click (kya hone par action hona chahiye, like click karne par, hover karne par, etc)
        action-->function(kya action hoga jab koi evenet occur hoga, like click event hoga toh kya hoga, hover karenge toh kya hoga, etc)
*/

