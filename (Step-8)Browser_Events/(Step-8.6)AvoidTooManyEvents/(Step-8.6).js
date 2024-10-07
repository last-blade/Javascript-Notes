let div = document.createElement('div');
let count = 1;

let btn = document.getElementById('button');

function printPara(){
    let paraElement = document.createElement('p');

    paraElement.textContent = "Paragraph Tag " + count;
    count = count+1;

    div.appendChild(paraElement);
}

document.body.appendChild(div);


btn.addEventListener('click', printPara);