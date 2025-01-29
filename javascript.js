// container element selection //
const container = document.querySelector("#container");
container.style.backgroundColor = "red";
container.style.border = "2px solid black";
container.style.padding = "20px";
container.style.display = "flex";


// Creation of 256 divs (16 x 16) //
const div1 = document.createElement("div");
div1.style.backgroundColor = "black";
div1.style.padding = "20px";
container.appendChild(div1);

const div2 = document.createElement("div");
div2.style.backgroundColor = "yellow";
div2.style.padding = "20px";
container.appendChild(div2);
