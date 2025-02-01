// container element selection and formating //
const container = document.querySelector("#container");
container.style.backgroundColor = "gray";
container.style.outline = "2px solid black"
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.alignContent = "flex-start";
container.style.alignItems = "center";
container.style.boxSizing = "border-box";
container.style.height = "830px";
container.style.width = "830px";

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

// Divs creation 16x16 //
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.style.height = "51.875px";
    div.style.width = "51.875px";
    div.style.backgroundColor = "white";
    div.style.border = "1px solid black";
    div.style.boxSizing = "border-box"
    container.appendChild(div);
  }
};

// Divs creation 64x64 //
for (let i = 0; i < 64; i++) {
  for (let j = 0; j < 64; j++) {
    const div = document.createElement("div");
    div.style.height = "12.96875px";
    div.style.width = "12.96875px";
    div.style.backgroundColor = "white";
    div.style.border = "1px solid black";
    div.style.boxSizing = "border-box"
    container.appendChild(div);
  }
};
