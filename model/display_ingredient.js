// display ingredient
const display_ingredient = (food_data) => {
  const main = document.querySelector(".main");
  const food_container = document.createElement("div");
  food_container.setAttribute("class", "food_container");

  const product_name = document.createElement("div");
  product_name.setAttribute("class", "product_name");
  product_name.innerText = food_data.product_name;

  const brands = document.createElement("div");
  brands.setAttribute("class", "brands");
  brands.innerText = food_data.brands;

  const thumbnail = document.createElement("img");
  thumbnail.setAttribute("class", "thumbnail");
  thumbnail.setAttribute("src", food_data.image_front_thumb_url);

  const ingredients = document.createElement("div");
  ingredients.setAttribute("class", "ingredients");
  ingredients.innerText = food_data.ingredients_text;

  const nutrients = document.createElement("div");
  nutrients.setAttribute("class", "nutrients");
  for (const nutriment in food_data.nutriments) {
    const preview = [
      "carbohydrates",
      "energy",
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

  const stores = document.createElement("div");
  stores.setAttribute("class", "stores");
  stores.innerText = food_data.stores;

  food_container.appendChild(product_name);
  // food_container.appendChild(brands);
  food_container.appendChild(thumbnail);
  // food_container.appendChild(ingredients);
  food_container.appendChild(nutrients);
  // food_container.appendChild(stores);
  main.appendChild(food_container);
  // return { main, food_container };
};

export { display_ingredient };
