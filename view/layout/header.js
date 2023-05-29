const header = () => {
  const body = document.body;

  // header
  const header = document.createElement("header");
  header.setAttribute("class", "header");

  // header_nav
  const header_nav = document.createElement("nav");
  header_nav.setAttribute("class", "header_nav");

  // header_nav_button
  // home
  const header_nav_button_home = document.createElement("a");
  header_nav_button_home.setAttribute("class", "header_nav_button home");
  header_nav_button_home.setAttribute("href", "/");
  header_nav_button_home.innerText = "home";
  // search ingredient
  const header_nav_button_search_ingredient = document.createElement("a");
  header_nav_button_search_ingredient.setAttribute(
    "class",
    "header_nav_button search_ingredient"
  );
  header_nav_button_search_ingredient.setAttribute(
    "href",
    "/search_ingredient"
  );
  header_nav_button_search_ingredient.innerText = "search ingredient";
  // display ingredient
  const header_nav_button_display_ingredient = document.createElement("a");
  header_nav_button_display_ingredient.setAttribute(
    "class",
    "header_nav_button display_ingredient"
  );
  header_nav_button_display_ingredient.setAttribute(
    "href",
    "/display_ingredient"
  );
  header_nav_button_display_ingredient.innerText = "display ingredient";

  // header assemble
  header_nav.appendChild(header_nav_button_home);
  header_nav.appendChild(header_nav_button_search_ingredient);
  header_nav.appendChild(header_nav_button_display_ingredient);
  header.appendChild(header_nav);
  body.appendChild(header);
};
header();
export { header };
