// import { search_ingredient_form } from "../components/forms/search_ingredient.js";

const main = () => {
  const body = document.body;

  const main = document.createElement("main");
  main.setAttribute("class", "main");

  const main_content = document.createElement("div");
  main_content.setAttribute("class", "main_content");

  const h1 = document.createElement("h1");

  main.appendChild(h1);
  main.appendChild(main_content);
  body.appendChild(main);
};
main();

export { main };
