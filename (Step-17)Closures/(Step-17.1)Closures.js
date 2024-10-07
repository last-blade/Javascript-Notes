/*
Closure:- A closure in JavaScript refers to the combination of a function and the lexical environment within which that
function was declared. This environment consists of any local variables that were in-scope at the time the closure was 
created. The closure retains access to those variables even after the outer function has finished executing, allowing the 
inner function to continue to reference and use them.

In simple words:- A closure in JavaScript is like a backpack that an inner function carries around. This backpack contains
              all the variables that were available in the outer function when the inner function was created. So, even
              if the outer function finishes running, the inner function can still use those variables from the backpack.



Real-life example:- Let's use the analogy of a wallet.

Imagine you have a wallet with some money in it, and you put it in your backpack. Then, you go on a trip, and during the
trip, you use the money from your wallet whenever you need to buy something.

In this analogy:

- Your wallet is like a closure.
- The money in your wallet is like the variables stored in the closure.
- Your backpack is like the function that creates the closure.
- The trip is like the execution of the function.

Even after the trip (i.e., after the function has finished executing), you still have access to the money in your wallet 
(i.e., the variables stored in the closure), because you carried it with you in your backpack (i.e., the closure). Similarly, 
even after the function has finished executing, the closure retains access to the variables that were in-scope when the closure 
was created.
*/





function fn1(){
    var name = "Prashant";
    function fn2(){
        console.log(name);
    }
    return fn2();
}

let func1 = fn1();

func1();

/*
A closure is created when an inner function (in this case, `fn2`) is defined within an outer function (in this case, `fn1`), and 
the inner function has access to variables in the outer function's scope even after the outer function has finished executing.

In my above code:-

- `fn2` is defined inside `fn1`, which makes it an inner function.
- `fn2` has access to the `name` variable defined in the scope of `fn1`.
- Even though `fn1` has finished executing by the time `fn2` is called, `fn2` still retains access to the `name` variable
  due to closure.

So, when you call `func1()`, it invokes `fn2`, which then logs the value of the `name` variable ("Prashant") to the console, thanks
to closure.
*/