import * as controller from "../controller/controller.js";

const search_ingredient_form = () => {
  controller.search_ingredient_form();
};
search_ingredient_form();

const handle_search_ingredient_form = () => {
  controller.handle_search_ingredient_form();
};
handle_search_ingredient_form();

export { search_ingredient_form, handle_search_ingredient_form };
