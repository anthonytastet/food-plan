const base_page_title = "food plan";

// replace navbar link behavior by custom router behavior
document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a")) {
    return;
  }
  e.preventDefault();
  router();
});

const location_handler = async () => {
  let current_location = window.location.pathname;
  if (
    current_location.length < 1 ||
    window.location.href === "http://127.0.0.1:5500/index.html" ||
    window.location.href === "http://127.0.0.1:5500/" ||
    window.location.href === "http://127.0.0.1:5500"
  ) {
    current_location = "/";
  }

  const route = routes[current_location] || routes[404];

  const page_content = await fetch(route.view).then((response) =>
    response.text()
  );

  document.title = route.title;

  document.querySelector("h1").innerText = route.title;

  const main_content_script = document.createElement("script");
  main_content_script.setAttribute("class", "main_content_script");
  main_content_script.setAttribute("type", "module");
  main_content_script.innerHTML = page_content;

  if (document.body.contains(document.querySelector(".main_content_script"))) {
    document.body.replaceChild(
      main_content_script,
      document.querySelector(".main_content_script")
    );
  } else {
    document.body.appendChild(main_content_script);
  }
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
