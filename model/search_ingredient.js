import * as component from "../view/component/form.js";

// get product barcode
// const get_ingredient_barcode = (barcode) => {
//   const tortilla_barcode = "8410076474438";
//   const chicken_barcode = "5413458066880";
//   barcode = tortilla_barcode;
//   const product_barcode = barcode;
//   return product_barcode;
// };

// build request URL
const build_request_url = (barcode) => {
  const request_url = `https://fr.openfoodfacts.org/api/v0/produit/${barcode}.json`;
  return request_url;
};

// contact api
const contact_api = async (url) => {
  const response = await fetch(url);
  const json_response = await response.json();
  const food_information = json_response.product;
  return food_information;
};

// search ingredient
const search_ingredient = async (product_barcode) => {
  const request_url = build_request_url(product_barcode);
  const food_information = await contact_api(request_url);
  component.edit_ingredient_form(food_information);
  // display_ingredient(food_information);
};

// handle search ingredient form
const handle_search_ingredient_form = () => {
  const form = document.querySelector(".search_ingredient_form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents the form from auto-submitting
    const product_barcode = document.querySelector(".text_input").value;
    search_ingredient(product_barcode);
  });
};

// display ingredient
const display_ingredient = (food_data) => {
  const main = document.querySelector(".main");

  const ingredient_container = document.createElement("div");
  ingredient_container.setAttribute("class", "ingredient_container");

  const product_name = document.createElement("div");
  product_name.setAttribute("class", "product_name");
  product_name.innerText = food_data.product_name;

  const thumbnail = document.createElement("img");
  thumbnail.setAttribute("class", "thumbnail");
  thumbnail.setAttribute("src", food_data.image_front_thumb_url);

  const nutrition_data_per = document.createElement("div");
  nutrition_data_per.setAttribute("class", "nutrition_data_per");
  nutrition_data_per.innerText = `portion: ${food_data.nutrition_data_per}`;

  const nutrients = document.createElement("div");
  nutrients.setAttribute("class", "nutrients");
  for (const nutriment in food_data.nutriments) {
    const preview = [
      "carbohydrates",
      "energy-kcal",
      "fat",
      "proteins",
      "salt",
      "saturated-fat",
      "sodium",
      "sugars",
    ];
    const nutrient = document.createElement("div");
    nutrient.setAttribute("class", `nutrient ${nutriment}`);
    if (!preview.includes(nutriment)) {
      nutrient.setAttribute("style", "display: none");
    }

    const nutrient_name = document.createElement("span");
    nutrient_name.innerText = nutriment;

    const nutrient_value = document.createElement("span");
    nutrient_value.innerText = Number(food_data.nutriments[nutriment]).toFixed(
      2
    );

    nutrient.appendChild(nutrient_name);
    nutrient.appendChild(nutrient_value);
    nutrients.appendChild(nutrient);
  }

  const ingredients = document.createElement("div");
  ingredients.setAttribute("class", "ingredients");
  ingredients.innerText = food_data.ingredients_text;

  ingredient_container.appendChild(product_name);
  ingredient_container.appendChild(thumbnail);
  ingredient_container.appendChild(nutrition_data_per);
  ingredient_container.appendChild(nutrients);
  ingredient_container.appendChild(ingredients);

  if (main.contains(document.querySelector(".ingredient_container"))) {
    main.replaceChild(
      ingredient_container,
      document.querySelector(".ingredient_container")
    );
  } else {
    main.appendChild(ingredient_container);
  }
};

export { handle_search_ingredient_form };
