/*
-->setInterval:- To call a function repeatedly (e.g., every N milliseconds), consider using setInterval().
              The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls
              a function or executes a code snippet, with a fixed time delay between each call. 
              
              

-->Syntax:-
setInterval(code)
setInterval(code, delay)
setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg1)
setInterval(func, delay, arg1, arg2)
setInterval(func, delay, arg1, arg2, ……………………,argN)


*/


function myCallback(a, b) {
    // Parameters are purely optional.
    console.log(a);
    console.log(b);
}

const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2"); 

/**
The setInterval() function in JavaScript repeatedly calls a function or executes a code snippet with a fixed time
delay between each call. In your example, myCallback is the function being called, and it's being invoked every
500 milliseconds with the parameters "Parameter 1" and "Parameter 2".
 */


