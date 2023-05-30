import * as controller from "../controller/controller.js";
import * as form from "../view/component/form.js";

const search_ingredient_form = () => {
  form.search_ingredient_form();
};
search_ingredient_form();

const handle_search_ingredient_form = () => {
  controller.handle_search_ingredient_form();
};
handle_search_ingredient_form();
