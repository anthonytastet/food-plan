// const h1 = document.createElement("h1");
// h1.innerText = "display ingredients";

// document.querySelector(".main_content").appendChild(h1);
const h2 = document.createElement("h2");
h2.setAttribute("class", "main_content");
const main = document.querySelector(".main");
const main_content = document.querySelector(".main_content");
main.replaceChild(h2, main_content);
