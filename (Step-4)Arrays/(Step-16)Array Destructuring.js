//Array Destructuring
let city=["Delhi", "Mumbai", "Chennai"];
let[city1, city2, city3]=city; /* Yeh aise likhna hi array destructuring hai...humein let kaa use karke 3 
variable banadiye city1, city2, city3 or unmein array ke elements store kara diye..city1 mein Delhi store ho gaya
city2 variable mein Mumbai store ho gaya and city3 variable mein Chennai store ho gaya...*/
console.log(city1);
console.log(city2);
console.log(city3);
      //or
let a1=city[0]; /*Or yeh ek traditional tareeka hai array ke elements ko variable mein store karana index
                  no. deke or fir print kara dena uss variable ko jismein array kaa element store kiya hai*/
let a2=city[1];
let a3=city[2];
console.log(a1,a2,a3);

let[cty1, cty2, ...myNewArray]=city;/* cty1 variable mein Delhi store ho gaya, cty2 variable mein Chennai element
                                        store ho gaya....or bacha hua element Chennai jo hai "myNewArray" 
                                        variable mein store ho gaya i.e. jo bache huye elemts hain jo store nahin
                                        ho paaye hain woh myNewArray variable mein  store ho gaye hain*/
console.log(myNewArray); //