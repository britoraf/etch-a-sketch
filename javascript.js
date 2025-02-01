// container element selection and formating //
const container = document.querySelector("#container");
container.style.backgroundColor = "gray";
container.style.outline = "2px solid black"
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.alignItems = "center";
container.style.boxSizing = "content-box";
container.style.height = "600px";
container.style.width = "600px";

// Centering the elements //
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

// Divs creation //
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.style.height = "37.5px";
    div.style.width = "37.5px";
    div.style.backgroundColor = "white";
    div.style.border = "1px solid black";
    div.style.boxSizing = "border-box"
    container.appendChild(div);


  }
};
