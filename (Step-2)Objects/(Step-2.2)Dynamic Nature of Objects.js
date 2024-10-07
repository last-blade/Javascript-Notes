// Dynamic nature of Object....means hum object ke andar property (i.e. key-value pair) add bhi akr sakte hain or delete bhi.

//For example--> neeche ek object create kiya hai 'phone' naam kaa
let phone = {
    android: 4.4,
    brand: 'Samsung',
    camera: '50MP',
    weight: '200g'
};

console.log(phone);

// 'phone' object mein ek nayi property ('wirelessCharging') add kardi
phone.wirelessCharging = 'Yes';
console.log(phone);

//weight property delete kardi 'phone' object ki
delete phone.weight;
console.log(phone);





//<----------------------------------------------------------------------------------------------------------------------------------->

/*Hum object ke andar array bhi daal sakte hain...or yeh bhi ek property hi hogi object ki...lets see below*/

let Girl={
    name: "Maitreyi",
    age: 21,
    hobbies:["guitar", "cooking", "reading books"], /*Ek array humne object ke andar insert kar di..lekin yeh 
                                                      name,age,hair ki tarah hi property hai.*/ 
    hair: "Silky" 
}
console.log(Girl);
console.log(Girl.hobbies);
// Adding new property or key-value pair in the Girl object using two methods--> (i)Dot operator method (ii) Bracket operator method
Girl.gender = "Female"; // ek nayi property bhi add kardi "gender" naam ki dot operator ka use karke
Girl["height"]=6; // Girle naam ke object mein ab maine bracket operator kaa use karke ek nayi property add kardi
//We can acces properties of the object by using (i)Dot operator (ii) Bracket operqtor
//(i) Dot operator
console.log(Girl.name);
//(ii) Bracket operator
console.log(Girl["age"]); /* ismein humen object ki 'age' wali property ko accesss kiya hai bracket ke andar age
                             ko likh diya bas....lekin humne 'age' property ko acces karte time brackets ke andar
                             'age' ko string mein kyon likha hai ? Woh isliye likha hain kyoki jo properties
                             humne object ke andar initialize ki hain woh by default String hoti hain..like hair
                             wali property woh bhi ek string hai...isliye humne brackets ke andar age ko string
                             mein likha hai(i.e. "age") */
console.log(typeof Girl.name); 

//<----------------------------------------------------------------------------------------------------------------------------------->




let car={
    colour:"black",
    price:900000,
    "car engine":1990 // yeh property maine space daalke likhi hai
}
//console.log(car);
/*Agar main "car engine" ke naam ki property access karna chahun dot operator se toh nahin ho paayega error
 aayegi kyoki "car engine" wali property ke beech mein sapce aa raha hai agar hum dot operator se acces karenge toh error dega code....
 but hum isko bracket operatr se acces kar sakte hain....pehle ek baar error wala code dekh lete hain dot 
 operator se jo aaya hai, see below:- */
//console.log(car.car engine); // Error:- Uncaught SyntaxError: missing ) after argument list
/*Ab hum isko Bracket operator se acces karenge "car engine" wali property ko */
console.log(car["car engine"]);
//Adding new property to "car" object above by taking the new property from the variable 
let x1="Car_Model";
car[x1]=1991;
console.log(car.Car_Model);