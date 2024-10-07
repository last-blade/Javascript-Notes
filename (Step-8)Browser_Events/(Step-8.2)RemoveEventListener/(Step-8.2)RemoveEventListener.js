function print(){
    console.log("Hello");
}

let btn = document.getElementById('button');

btn.addEventListener('click', print);

btn.removeEventListener('click', print);