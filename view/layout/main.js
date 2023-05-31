// import { search_ingredient_form } from "../components/forms/search_ingredient.js";

const main = () => {
  const body = document.body;

  const main = document.createElement("main");
  main.setAttribute("class", "main");

  const main_content = document.createElement("div");
  main_content.setAttribute("class", "main_content");

  const page_title = document.createElement("h1");
  page_title.setAttribute("class", "page_title");

  main.appendChild(page_title);
  main.appendChild(main_content);
  body.appendChild(main);
};
main();

export { main };
