let newElement = document.createElement('h1');

let extractedElement = document.getElementById('name');

extractedElement.insertAdjacentElement('afterend', newElement); /* 2 arguments dene padte hain iss method ke andar*/

newElement.textContent = 'This is new Element';