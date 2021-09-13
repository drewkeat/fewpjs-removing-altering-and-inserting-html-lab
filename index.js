// Write your code here!

document.getElementById("main").remove()

// index.html after index.js is processed
// has a 'newHeader' variable that points to node 'h1#victory':

let newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.innerHTML = "Drew is the champion.";
document.body.appendChild(newHeader);