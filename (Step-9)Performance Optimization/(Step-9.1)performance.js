//Performance
const t1 = performance.now();
for(let i=1; i<=10; i++)
{
    let element = document.createElement('p');
    element.textContent = "This is para" + i;
    document.body.appendChild(element);
}
const t2 = performance.now();
console.log("Time in " + (t2-t1) + "ms");




//a bit optimised code than above code written
const t3 = performance.now();
let myDivTag = document.createElement('div');
for(let i=1; i<=10; i++)
{
    let paraTag = document.createElement('p');
    paraTag.textContent = "This is Paragraph" + i;

    myDivTag.appendChild(paraTag);
}
document.body.appendChild(myDivTag);
const t4 = performance.now();
console.log("Time in " + (t4-t3) + "ms");
/*Lekin jab bhi main document ko update karta hoon i.e., html file mein yaa fir documnet bhi bol sakte hain, toh main
jab bhi html file mein koi naya element add karta hoon toh 2 cheez ho rahi hoti hain background mein first
is (i)Reflow and second is (ii)Repaint..... Reflow kaa matlab hota hai ki jab bhi mera koi naya element yaa
naya tag add hota hai documnet yaa html file mein toh uss element yaa tag ki dimensions and positions calculate
hoti hain and fir Repaint wali process chalti hai jismein ki pixels assign hote hain uss particular element ko
jisse ki humein woh display par show ho....toh yeh dono processes jo hain ek element ko html file mein add
karne par hoti hain...agar mujhe 10 element add karne hain toh Reflow 10 times run hoga and Repaint bhi 10 times
run hoga...tab jaake mere total 10 element add honge document mein yaa html file mein......

or iss background process ki wajha se i.e. Reflow and Repaint ki wajah se performance kam ho jaati hai code ki
jisse ki slow execute hota hai.....toh iss problem ko hum overcome kar sakte hain jisse ki Reflow and Repaint 
bas ek hi baar chalenge kewal chahe hum naye element kitne bhi add karle document mein, Reflow and Repaint
wali process bas ek baar hogi...i.e. Reflow 1 time chalega and Repaint bhi 1 time chalega...chahe hum elements
100 add kare yaa 1000 add kare document mein...or isse performance kaafi zyada badh jaayegi code ki....

and iss performace ko badhane ke liye hum fragment kaa concept use karte hain....toh jab bhi aisi situation 
create ho jahan par humein document ko update karna hai add karne hain multiple elements yaa fir remove karne
hain multiple elements from the documnet or html file...toh aisi situation mein hum fragment wala concept use
karte hain....see below:-
 */

let fragment = document.createDocumentFragment();
for(let i=1; i<=100; i++)
{
    let new_element = document.createElement('p');
    new_element.textContent = "This is paragraphTag" + i;
    fragment.appendChild(new_element);
}
document.body.appendChild(fragment);
/*toh above code mein maine html body mein 100 'p' tag insert kar raha hoon...toh humne padaha hai aisi situation
mein hum createDocumentFragment() wala method apply karte hain jisse mi sirf Reflow and Repaint jo hai kewal ek
baar hi chale background mein or issey performance increase ho jaayegi humare code ki */



//<------------------------------------------------------------------------------------------------------------->






//<------------------------------------------------------------------------------------------------------------->



















