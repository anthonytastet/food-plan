import { display_ingredient } from "./display_ingredient.js";

// search ingredient form
const search_ingredient_form = () => {
  const main = document.querySelector(".main");

  const form = document.createElement("form");
  form.setAttribute("class", "form search_ingredient_form main_content");
  form.setAttribute("method", "post");

  const input = document.createElement("input");
  input.setAttribute("class", "text_input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "barcode");
  input.setAttribute("id", "barcode");

  const submit = document.createElement("input");
  submit.setAttribute("class", "submit_input");
  submit.setAttribute("name", "submit");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Submit");

  form.appendChild(input);
  form.appendChild(submit);
  const main_content = document.querySelector(".main_content");
  main.replaceChild(form, main_content);
};

// handle search ingredient form
const handle_search_ingredient_form = () => {
  const form = document.querySelector(".search_ingredient_form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents the form from auto-submitting
    const barcode = document.querySelector(".text_input").value;
    console.log(barcode);
  });
};

// get product barcode
const get_ingredient_barcode = (barcode) => {
  const tortilla_barcode = "8410076474438";
  const chicken_barcode = "5413458066880";
  barcode = tortilla_barcode;
  const product_barcode = barcode;
  return product_barcode;
};

// build request URL
const build_request_url = (request_data) => {
  const request_url = `https://fr.openfoodfacts.org/api/v0/produit/${request_data}.json`;
  return request_url;
};

// get food information
const contact_api = async (url) => {
  const response = await fetch(url);
  const json_response = await response.json();
  const food_information = json_response.product;
  display_ingredient(food_information);
};

// search ingredient
const search_ingredient = async () => {
  const request_productData = get_ingredient_barcode(tortilla_barcode);
  const request_url = build_request_url(request_productData);
  await contact_api(request_url);
};

export {
  search_ingredient_form,
  handle_search_ingredient_form,
  search_ingredient,
};
