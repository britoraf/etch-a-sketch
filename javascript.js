// container element selection and formating //
const container = document.querySelector("#container");
container.style.backgroundColor = "gray";
container.style.outline = "2px solid black";
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
sizeButton.textContent = "Change Grid Size";
var userInput = 0;
sizeButton.addEventListener("click", () =>
  userInput = prompt("Insert the grid size (16 or 64):")
  );

// Button to test gridAssembly //
const testButton = document.createElement("button");
testButton.addEventListener("click", () => gridAssembly16());
buttonContainer.appendChild(testButton);
testButton.textContent = "Generate Grid";


function gridAssembly16() {
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

// Divs creation 16x16 //
// function gridAssembly16() {
//   container.replaceChildren();
//   for (let i = 0; i < 16; i++) {
//     for (let j = 0; j < 16; j++) {
//       const div = document.createElement("div");
//       div.style.backgroundColor = "white";
//       div.style.height = "51.875px";
//       div.style.width = "51.875px";
//       div.style.border = "1px solid black";
//       div.style.boxSizing = "border-box";
//       div.addEventListener(
//         "mouseenter", () => (div.style.backgroundColor = "gray"),
//       );
//       container.appendChild(div);
//     }
//   }
// }

// Divs creation 64x64 //
// function gridAssembly64() {
//   for (let i = 0; i < 64; i++) {
//     for (let j = 0; j < 64; j++) {
//       const div = document.createElement("div");
//       div.style.height = "12.96875px";
//       div.style.width = "12.96875px";
//       div.style.backgroundColor = "white";
//       div.style.border = "1px solid black";
//       div.style.boxSizing = "border-box";
//       div.addEventListener(
//         "mouseenter", () => (div.style.backgroundColor = "gray"),
//       );
//       container.appendChild(div);
//     }
//   }
// }

// Hover effect on grids //
