// search ingredient form
const search_ingredient_form = () => {
  const main = document.querySelector(".main");

  const form = document.createElement("form");
  form.setAttribute("class", "form search_ingredient_form main_content");

  const input = document.createElement("input");
  input.setAttribute("class", "text_input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "barcode");
  input.setAttribute("id", "barcode");
  input.setAttribute("autofocus", "");

  const submit = document.createElement("input");
  submit.setAttribute("class", "submit_input");
  submit.setAttribute("name", "submit");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Search");

  form.appendChild(input);
  form.appendChild(submit);
  const main_content = document.querySelector(".main_content");
  main.replaceChild(form, main_content);
};

// edit ingredient form
const edit_ingredient_form = (food_data) => {
  console.log(food_data);
  const main = document.querySelector(".main");

  const ingredient_container = document.createElement("form");
  ingredient_container.setAttribute("class", "form ingredient_container");

  const product_name = document.createElement("input");
  product_name.setAttribute("class", "product_name");
  product_name.setAttribute("disabled", "");
  product_name.setAttribute("type", "text");
  product_name.setAttribute("value", food_data.product_name);

  const barcode = document.createElement("input");
  barcode.setAttribute("class", "barcode");
  barcode.setAttribute("name", "barcode");
  barcode.setAttribute("type", "number");
  barcode.setAttribute("disabled", "");
  barcode.setAttribute("value", food_data.id);

  const ingredient_id_container = document.createElement("div");
  ingredient_id_container.setAttribute("class", "ingredient_id_container");
  ingredient_id_container.appendChild(product_name);
  ingredient_id_container.appendChild(barcode);

  const thumbnail = document.createElement("img");
  thumbnail.setAttribute("class", "thumbnail");
  thumbnail.setAttribute("src", food_data.image_front_thumb_url);

  const nutrition_data_per = document.createElement("div");
  nutrition_data_per.setAttribute("class", "nutrition_data_per");
  nutrition_data_per.innerText = `for ${food_data.nutrition_data_per} :`;

  const ingredient_header = document.createElement("div");
  ingredient_header.setAttribute("class", "ingredient_header");
  ingredient_header.appendChild(ingredient_id_container);
  ingredient_header.appendChild(thumbnail);
  ingredient_header.appendChild(nutrition_data_per);

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

    const nutrient_value = document.createElement("input");
    nutrient_value.setAttribute("type", "number");
    nutrient_value.setAttribute("name", nutriment);
    nutrient_value.setAttribute("disabled", "");
    nutrient_value.setAttribute(
      "value",
      Number(food_data.nutriments[nutriment]).toFixed(2)
    );

    nutrient.appendChild(nutrient_name);
    nutrient.appendChild(nutrient_value);
    nutrients.appendChild(nutrient);
  }

  const ingredient_description = document.createElement("textarea");
  ingredient_description.setAttribute("class", "ingredient_description");
  ingredient_description.setAttribute("name", "ingredient_description");
  ingredient_description.setAttribute("disabled", "");
  ingredient_description.setAttribute("rows", "5");
  if (String(food_data.ingredients_text) === "undefined") {
    ingredient_description.innerText = food_data.product_name;
  } else {
    ingredient_description.innerText = food_data.ingredients_text;
  }

  const price_name = document.createElement("span");
  price_name.setAttribute("class", "price_name");
  price_name.innerText = "price";

  const price_value = document.createElement("input");
  price_value.setAttribute("class", "price_value");
  price_value.setAttribute("name", "price_value");
  price_value.setAttribute("type", "number");

  const price_container = document.createElement("div");
  price_container.setAttribute("class", "price_container");
  price_container.appendChild(price_name);
  price_container.appendChild(price_value);

  const ingredient_footer = document.createElement("div");
  ingredient_footer.setAttribute("class", "ingredient_footer");
  ingredient_footer.appendChild(ingredient_description);
  ingredient_footer.appendChild(price_container);

  ingredient_container.appendChild(ingredient_header);
  ingredient_container.appendChild(nutrients);
  ingredient_container.appendChild(ingredient_footer);

  if (main.contains(document.querySelector(".ingredient_container"))) {
    main.replaceChild(
      ingredient_container,
      document.querySelector(".ingredient_container")
    );
  } else {
    main.appendChild(ingredient_container);
  }
};

export { search_ingredient_form, edit_ingredient_form };
