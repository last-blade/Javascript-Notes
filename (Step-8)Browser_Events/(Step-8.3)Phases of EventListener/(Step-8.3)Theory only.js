//#Phases of an event or lifecycle of an event :-
/*
Three phases hote hain ki kaise events work kar rahe hain 
(i)Capturing phase:-
(ii)Target phase:-
(iii)Bubbling phase:-



1.) Capturing Phase: In this phase, the event is captured by the outermost element and then propagated to the inner
                    elements. It starts from the root of the DOM tree and goes down to the target element. This phase
                    allows you to handle the event before it reaches its target.

2.) Target Phase: Also known as the "At Target" phase, this is the phase when the event reaches the target element. The
                  event is processed on the target element itself.

3.) Bubbling Phase: After the event has been handled on the target element, it begins to bubble up through its ancestors in
                    the DOM tree, starting from the target element and ending at the root of the tree. This phase allows you
                    to handle the event as it propagates back up the DOM tree.

To understand by visually, see the image in this folder.

-->jab hum event listener lagate hain kisi element par, toh fir uss element par event listener bubbling phase mein apply hota hai
    by default, and agar humein kisi or phase mein apply karwana hai toh fir neeche syntax diya hua hai...usmein third wali
    value hi deni padti hai phase badalne ke liye....agar maine 'true' value dedi toh fir capturing phase on ho jaata hai...
    agar kuch bhi value nahin di maine third parameter mein toh fir by default bubbling phase on rehta hai...and hum target phase
    par apply nahin kar sakte event listener ko


Syntax:- addEventListener(type, listener, useCapture) 

//first parameter "type" humara 'click' ho sakta hai and 2nd 
parameter "listener" ek function hota hai and ismein 3rd parameneter useCapture jo hai ek event phase hai...
agar 3rd parameter provide naa karun toh automatically "bubbling phase mein" chala jaata hai event....agar main
"true" likh doon 3rd parameter mein toh fir "capturing phase" mein chala jaata hai event....agar mujhe "target 
phase" par stop karna hai event ko toh fir 3rd parameter jo hai "true" hi rahega but jo function defined hoga
event listener ke andar toh uss function andar bas ek event.stopPropagation(); likh dena hai...isse humara
event jo hai bubbling phase mein nahin jaa paayega or target phase par hi ruk jaayega:- example see below:-
*/
// const myElement = document.getElementById("myElement");
// function myEventListener(event) {
//     console.log("Event occurred in capturing phase.");
//     // Stop the event propagation during capturing phase
//     event.stopPropagation();
// }
// // Add the event listener with capture set to true
// myElement.addEventListener("click", myEventListener, true);


