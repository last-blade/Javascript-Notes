//Getter and Setter

/*
Why we are using getter and setter ?
ans:- hum getter and setter isliye use kar rahe hain agar humein object ki properties ko access karna hai toh uske
liye humein code likhna padega lekin mujhe agar 10 baar access karna pad raha hai toh same code baar baar likhna
padega toh uske liye hum getter function bana dete hain or fir seedhe function ko call karte hain jisse ki 
humara code bhi bulky nahin hota....or similarly setter function banate hain agar humne object ki properties ko
change karna hai....see example of getter and setter below...getter and setter function jo hain unko object ke
andar hi likhna hota hai...see below 
*/

let person = {
    fName: "Prashant",
    lName: "Tyagi",
    
    get fullname()
    {
        return `${person.fName} ${person.lName}`
    },

    set fullname(value)
    {
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];    
        // return this.fullname;           
    }
};

console.log(person.fullname); //Output:- Prashant Tyagi
person.fullname = "Rahul Kumar"; //Ab maine set kari hai value
console.log(person.fullname)