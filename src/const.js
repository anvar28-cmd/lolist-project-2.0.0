export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const ENDPOINT = `${BASE_URL}`;
export const REQUEST_TIMEOUT = 5000;

export const AppRoute = {
  INDEX: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  HEROES: "/heroes",
  HEROES_SELECTED: "/heroes/:slug",
  HEROES_BUILDS: "/heroes/:slug/builds",
  BUILDS: "/builds",
  ABOUT: "/about",
  NOT_FOUND: "*",
};

export const APIRoute = {
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  HEROES: "/heroes",
  HEROES_SELECTED: "/heroes/:slug",
  HEROES_BUILDS: "/heroes/:slug/builds",
  ITEMS: "/items",
  SPELLS: "/spells",
  BUILDS: "/builds",
  BUILDS_SELECTED: "/builds/:id",
};

export const NavigationItems = [
  { url: AppRoute.HEROES, text: "Heroes" },
  { url: AppRoute.BUILDS, text: "Builds" },
  { url: AppRoute.ABOUT, text: "About" },
];
