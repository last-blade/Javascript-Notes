/*1. content1.setAttrubute("style", "color: red; background-color:black;"); // and iss property se main kisi element
                                                                             ki id name bhi change kar sakta hoon
                                                                             yaa class kaa naam..etc. see below:- 
  content1.setAttribute("id", "containerBox");// ab content1 naam ke tag mein id aa jaayegi id = "containerBox"
2. content1.className; //Agar humein kisi tag ke andar kitni classes hain toh unkaa pata laga sakte hain
                          like ki div tag ke andar kitni classes bani huyi hain...lekin yeh class ke naam jo hain
                          ek string mein show honge....agar humein array ki form mein chahiye jisse thoda
                          simplify dikhe or hum fir changes bhi kar sake agar string hogi toh changes nahin
                          kar sakte but array mein aa jaayenge classes ke name toh aasani padegi toh iske liye
                           humein split method kaa use karna padega array mein convert karne ke liye string ko
                            but yeh ek lamba process bhi hai kaafi...toh iske jagah par hum doosra method use
                            karte hain...see point 3 below:- 

3. content1.classList; //yeh humein object mein deta hai classes ke naam...i.e.key-value-pairs
                       or iss classList par total 5 methods laga sakte hain (i) add() (ii)remove() (iii)toggle()
                                                                            (iv)contains()
                        (i)add():- object mein addd karna apni marzi se koi bhi key-value-pair
                        (ii)remove:- 
                        (iii)toggle():- koi element add karna agar woh present hoga pehle se hi toh remove ho
                                        jaayega agar present nahin hua toh add ho jaayega
                        (iv)contains():- true and false return karna hai...agar humein check karna hai ki yeh
                                         particular proprty exist karti hai yaa nahin...karti hai toh true else false */                