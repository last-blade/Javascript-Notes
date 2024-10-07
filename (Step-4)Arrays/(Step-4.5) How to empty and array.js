//How to empty an Array or delete all elements of the array
let arr1 = [1,2,3,4,5,6];
let arr2 = arr1;
arr1 = []; //"arr1" naam ki aaray ko maine empty kar diya yahan par
console.log(arr1); //Output:- []  (empty array print ho gayi)
console.log(arr2); /*Output:- [1,2,3,4,5,6]  But arr2 wali array bhi empty ho jaani chahiye thi kyoki
                                arr2 wali array jo hai "arr1" wali array ko point kar rahi hai i.e. 
                                arr2 wali array ke paas "arr1" wali array ka address hai toh jo changes
                                "arr1" naam ki aaray aayenge wahi changes "arr2" naam ki aaray mein
                                bhi aane chahiye kyoki dono kaa address toh same hai...toh iss hisaab se
                                "arr2" ko jab print karayenge toh empty array print honi chahiye, lekin
                                aisa nahin hua....wh isliye nahin hua kyoki jab humne "arr1" ko 
                                empty se initialize kar diya toh fir iss array kaa address change ho gaya ab yeh
                                array naye address ko point karegi (arr1=[]) or jis wajah se ab mein
                                iss array mein kuch bhi changes karunga toh woh ek naye address par changes 
                                honge na ki purane wale address par or iss wajah se ab "arr2" kaa address
                                alag ho gaya hai and "arr1" kaa address alag ho gaya
                                              
1. let arr1 = [1, 2, 3, 4, 5, 6];

This line initializes an array called "arr1" with the values 1, 2, 3, 4, 5, and 6.

2. let arr2 = "arr1";

This line creates a new variable called "arr2" and assigns it the reference of the "arr1" array.
 Both "arr1" and "arr2" now point to the same array in memory.

3. "arr1" = [];

This line reassigns the "arr1" variable to a new empty array. It does not modify the original array; 
instead, it creates a new array and points the "arr1" variable to it. The original array 
[1, 2, 3, 4, 5, 6] is still referenced by arr2.*/
                                
//Agar humein array ko empty karna hai toh...see below
let cities = ["Delhi", "Mumbai"];
cities.length = 0;
console.log(cities); //Output:- [] (it is an empty array)
       //or
let one = [1,2,3,4,5];
one.splice(0, one.length);  // zero index, number of elemets you want to delete      
console.log(one); // output:- []  (empty array)