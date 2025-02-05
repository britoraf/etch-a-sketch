// container element selection and formating //
const container = document.querySelector("#container");
container.style.backgroundColor = "white";
// container.style.outline = "1px solid gray";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.alignContent = "flex-start";
container.style.alignItems = "center";
container.style.boxSizing = "border-box";
container.style.height = "830px";
container.style.width = "830px";

// Arranging the elements //
const header = document.querySelector("header");
header.style.display = "flex";
header.style.justifyContent = "center";

const main = document.querySelector("main");
main.style.display = "flex";
main.style.alignItems = "center";
main.style.justifyContent = "center";

const section = document.querySelector("section");
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.alignItems = "center";

const footer = document.querySelector("footer");
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.addEventListener("onmouseover", () => footer.style.color = "yellow")

// Buttons div creation //
const buttonContainer = document.createElement("div");
section.insertBefore(buttonContainer, container);
buttonContainer.style.margin = "20px"

// Control buttons creation //
const sizeButton = document.createElement("button");
buttonContainer.appendChild(sizeButton);
sizeButton.textContent = "1. Choose Grid Size";
sizeButton.style.margin = "10px";
var userInput = 0;
sizeButton.addEventListener("click", () =>
  userInput = prompt("Insert the grid size:")
  );

// Button to test gridAssembly //
const generateButton = document.createElement("button");
generateButton.addEventListener("click", () => gridAssembly());
buttonContainer.appendChild(generateButton);
generateButton.textContent = "2. Generate Grid";
generateButton.style.margin = "10px";


function gridAssembly() {
  container.replaceChildren();
  for (let i = 0; i < userInput; i++) {
    for (let j = 0; j < userInput; j++) {
      const div = document.createElement("div");
      div.style.backgroundColor = "white";
      div.style.height = String(830/userInput+"px");
      div.style.width = String(830/userInput+"px");
      div.style.border = "1px solid gray";
      div.style.boxSizing = "border-box";
      div.addEventListener(
        "mouseenter", () => (div.style.backgroundColor = "gray"),
      );
      container.appendChild(div);
    }
  }
}
