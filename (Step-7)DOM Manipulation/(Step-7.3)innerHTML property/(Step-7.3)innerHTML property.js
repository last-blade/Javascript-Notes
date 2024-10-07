/*
For example, we can append a new list item (<li>) to the existing list (<ul>):
*/

const list = document.getElementById("list");

list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
