//This step-2.7 has only theory about Garbage collector in javascript

/*

--> Javascript mein inbuilt garbage collector hota hai jo ki automatically aise variables yaa fir constants ko find out karta hai
    jo ki ab use mein nahin hai or unhone jo memory occupy kari hoti hai uss memory ko free karwa deta hai garbage collector
    and yahi same kaam humein c/c++ mein manually karna padta hai



--> In JavaScript, memory management is handled automatically by the browser's garbage collector. The garbage collector's job
    is to reclaim memory that is no longer being used by the program, thereby preventing memory leaks and optimizing memory usage.


--> JavaScript uses a technique called "automatic garbage collection," which means developers don't have to manually
    allocate or deallocate memory. Instead, the JavaScript engine keeps track of references to objects. When an object is
    no longer reachable, meaning there are no references to it, the garbage collector will automatically reclaim the
    memory occupied by that object.
*/