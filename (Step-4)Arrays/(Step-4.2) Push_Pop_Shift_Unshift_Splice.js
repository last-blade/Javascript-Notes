//Two methods in Array (i) Push (ii) Pop (iii) shift (iv) unshift (v) splice

 let animals=["Dog", "cat", "Tiger"];
 //push
 animals.push("Lion"); 
 console.log(animals); 
 
 //NOTE:- Array ek mutable hai changeable hai...agar array mein change karte hain toh original array mein changes aa jaate hain....but yeh same concept primitive types par apply nahin hota (i.e. Primitive types are not mutable like String).
 
 //Pop
 let r= animals.pop(); // last element remove hoga array mein se, element "Lion" removed from the array beacuse "Lion" element is the last element in the array or jab remove hota hai element toh aray jo hai uss element ko return kar deta hai i.e. remove kar deta hai array se or hum iss remived element ko print bhi kara sakte hain yaa toh kisi variable mein store karake yaa fir direct print karake
 console.log("removed element form the array is:- ", r);
 console.log(animals);
 
 //unshift:- iska use karke array mein hum first index par new element ko push(insert) kar sakte hain
 animals.unshift("Monkey", "Gorilla"); //insertted two elemets array ke startimg mein. 
 console.log(animals);
 
 
 //shift:- zero index par element jo hai woh remove ho jaayega or iss returned element ko hum store kara sakte hain kisi bhi variable mein yaa fir direct print kara sakte hain removed element ko 
 let array1=["hello", "byeye", "welcome", "goodbye"]
 array1.shift();// removed first element "hello"
 console.log(array1);
 
 // splice:- iss mthod kaa use karke hum apni marzi se kisi bhi index no. par koi element insert kar sakte hain
 let myArray=[1,2,3,4,5];
 myArray.splice(2, 0, "a", "b", "c", "d"); /*Syntax:- Jiss index par value insert karna chahte ho woh index no.
 daalo, agar koi element delete karna hai woh daalo lekin woh element wahan se delete hoga jahan se insertin hoga
  new elements kaa i.e. agar 3 daala hai toh 3 elemets delete honge, fir jo elements insert karne hain woh daal do...i.e., total
 3 vlaues daalni padti hai */
 console.log(myArray); /*Output:- [1, 2, 'a', 'b', 'c','d', 3, 4, 5] */
 myArray.splice(2,4, "a", "b");
 console.log(myArray); // Output:- [ 1, 2, 'a', 'b' ]  