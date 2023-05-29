import * as search_ingredient_model from "../model/search_ingredient.js";
import * as display_ingredient_model from "../model/display_ingredient.js";

const search_ingredient_form = () => {
  search_ingredient_model.search_ingredient_form();
};

const handle_search_ingredient_form = () => {
  search_ingredient_model.handle_search_ingredient_form();
};

const search_ingredient = () => {
  search_ingredient_model.search_ingredient();
};

const display_ingredient = () => {
  display_ingredient_model.display_ingredient();
};

export {
  search_ingredient_form,
  handle_search_ingredient_form,
  search_ingredient,
  display_ingredient,
};
