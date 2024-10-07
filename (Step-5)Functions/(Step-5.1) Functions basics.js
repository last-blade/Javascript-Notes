function printNumbers(n){
    for(let i = 0; i<=n; i++){
        console.log(i);
    }
}

printNumbers(10);

//Function assignment:- Jab hum kisi function ko assign karte hain kisi variable mein..toh isko function assignment kehte hain
//Types of function assignment ke 2 types hota hain:-
//(1) Named-function assignment:- named-function assignment mein humare function kaa naam mentioned hai 'walk()'

let ans = function walk(){
    console.log("Walking");
}

//(2) Anonymous-function assignment:- ismein function kaa naam hi nahin diya hai isliye anonymous bolte hain isko
let result = function(){
    console.log("Anonymous function hai yeh")
}