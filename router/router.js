const base_page_title = "food plan";

document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a")) {
    return;
  }
  e.preventDefault();
  router();
});

const location_handler = async () => {
  const location = window.location.pathname;
  if (location.length == 0) {
    location = "/";
  }

  const route = routes[location] || routes[404];

  const page_content = await fetch(route.view).then((response) =>
    response.text()
  );

  document.title = route.title;

  document.querySelector("h1").innerText = route.title;

  const main_content_script = document.createElement("script");
  main_content_script.setAttribute("type", "module");
  main_content_script.innerHTML = page_content;

  document.body.replaceChild(main_content_script, document.body.childNodes[3]);
};

const routes = {
  404: {
    view: "./view/404.js",
    title: `${base_page_title} | 404`,
    description: "",
  },
  "/": {
    view: "./view/home.js",
    title: `${base_page_title} | home`,
    description: "",
  },
  "/search_ingredient": {
    view: "./view/search_ingredient.js",
    title: `${base_page_title} | search ingredient`,
    description: "",
  },
  "/display_ingredient": {
    view: "./view/display_ingredient.js",
    title: `${base_page_title} | display ingredient`,
    description: "",
  },
};

const router = (event) => {
  event = event || window.event;
  event.preventDefault;
  window.history.pushState({}, "", event.target.href);
  location_handler();
};

export { router };
