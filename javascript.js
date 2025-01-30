// container element selection //
const container = document.querySelector("#container");
container.style.backgroundColor = "red";
container.style.border = "2px solid black";
container.style.padding = "10px";
container.style.display = "inline-flex";
container.style.justifyContent = "center";

// Divs creation //
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.style.padding = "20px";
    div.style.backgroundColor = "yellow";
    div.style.border = "1px solid black";
    container.appendChild(div);

  }
};
