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
  submit.setAttribute("value", "Search");

  form.appendChild(input);
  form.appendChild(submit);
  const main_content = document.querySelector(".main_content");
  main.replaceChild(form, main_content);
};

export { search_ingredient_form };
