/*
#Event Object:- 
event object basically ek object hai jismein poori ki poori details hoti hai kisi bhi particular
event ki jab bhi koi event occur hota hai toh uss event ki poori details ek event object mein stored hoti hain
or iss object lo hum dekh sakte hain print kara ke...pehle main ek event listener banaunga or fir like kisi
button ke oopar mein event listener lagaunga or jab bhi main uss button par click karunga toh uss event ki 
details ek object mein stored hoti hain jaise ki oopar likha hai...toh hum uss object ko print karayenge..see*/

let myButton = document.querySelector('.button');
myButton.addEventListener('click', function(event){
        console.log(event);
})
/*
OUTPUT:- PointerEvent {isTrusted: true, pointerId: 0, width: 1, height: 1, pressure: 0, …}
addEvenetListener method ke andar jo function define kiya hai maine...toh usko iss function ko ek "event object"
receive hota hai....toh jab bhi main button par click karunga toh uss uss event ki details jo hain ek object
mein hongi or maine uss objcet ko print kar diya oopar output hai*/