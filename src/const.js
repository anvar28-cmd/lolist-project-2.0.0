export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const ENDPOINT = `${BASE_URL}`;

export const AppRoute = {
  INDEX: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  HEROES: '/heroes',
  HEROES_SELECTED: '/heroes/:slug',
  HEROES_BUILDS: '/heroes/:slug/builds',
  BUILDS: '/builds',
  NOT_FOUND: '*',
};
