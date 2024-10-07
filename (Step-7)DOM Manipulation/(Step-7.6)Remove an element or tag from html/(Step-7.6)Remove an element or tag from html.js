let parentElement = document.querySelector('.parent');

let childElement = document.querySelector('.para'); /* 'para' wali class ke element ko remove kar rahe hain...and iske liye humein
                                                        Parent element pata hona chahiye i.e. ki kiss element ke andar hai woh
                                                        element jisko humein remive karna hai */

parentElement.removeChild(childElement); /* parent element ke andar jo element hai usko remove kar diya..i.e. parent naam ki
                                             class ke andar jo calss hai para naam se usko remove kar diya */


/*
removeChild wale method ko use karne ke liye hume parent wala element pata hona chahiye hamesha...i.e. suppose mera ek element hai
'div' naam kaa and iss div ke andar mera ek element or pada hua hai 'p' naam kaa....toh ab mujhe 'p' naam kaa element delete
karna hai toh fir mujhe 'p' element kaa parent element pata hona chahiye or parent element toh mera 'div' hai iss case mein....
and bina parent element ke hum remove nahin kar sakte iss method kaa use karke...toh yeh ek drawback hai ki humein jis element
ko remove karna hai uska parent element pata hona chahiye otherwise remove nahin kar sakte hum uss element ko i.e. child element
keh sakte hain hum jisko delete karna hai 
*/                                       


/*
oopar wale drawback ko overcome karne ke liye humein parent element kaa pata nahin hoga tab bhi remove kar sakte hain...bas jiss
element ko remove karna hai uss element kaa pata hona chahiye...line no.7 wale code ko hum kuch aise likh sakte hain...see below:-

childElement.parentNode.removeChild(childElement);  and hum line no.1 ko hata sakte hain...parent element nikalne ki need nahin hai...
issi code mein humne parent element wala method laga diya hai parentNode ke naam se...
*/

let ele = document.getElementById('h1Tag');

ele.parentNode.removeChild(ele); 