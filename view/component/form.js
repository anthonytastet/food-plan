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
  // input.setAttribute("autofocus", "");

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
  ingredient_container.setAttribute("class", "ingredient_container");

  const product_name = document.createElement("input");
  product_name.setAttribute("class", "product_name");
  product_name.setAttribute("type", "text");
  product_name.setAttribute("value", food_data.product_name);

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

    const nutrient_value = document.createElement("input");
    nutrient_value.setAttribute("type", "number");
    nutrient_value.setAttribute("name", nutriment);
    nutrient_value.setAttribute(
      "value",
      Number(food_data.nutriments[nutriment]).toFixed(2)
    );

    nutrient.appendChild(nutrient_name);
    nutrient.appendChild(nutrient_value);
    nutrients.appendChild(nutrient);
  }

  const ingredients = document.createElement("input");
  ingredients.setAttribute("class", "ingredients");
  ingredients.setAttribute("name", "ingredients");
  ingredients.setAttribute("type", "text");
  if (String(food_data.ingredients_text) === "undefined") {
    ingredients.setAttribute("value", food_data.product_name);
  } else {
    ingredients.setAttribute("value", food_data.ingredients_text);
  }

  const price = document.createElement("input");
  price.setAttribute("class", "price");
  price.setAttribute("name", "price");
  price.setAttribute("type", "number");

  const barcode = document.createElement("input");
  barcode.setAttribute("class", "barcode");
  barcode.setAttribute("name", "barcode");
  barcode.setAttribute("type", "number");
  barcode.setAttribute("readonly", "");
  barcode.setAttribute("value", food_data.id);

  ingredient_container.appendChild(product_name);
  ingredient_container.appendChild(thumbnail);
  ingredient_container.appendChild(nutrition_data_per);
  ingredient_container.appendChild(nutrients);
  ingredient_container.appendChild(ingredients);
  ingredient_container.appendChild(price);
  ingredient_container.appendChild(barcode);

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
