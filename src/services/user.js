const USER_KEY_NAME = "user-data";

export const getUser = () => {
  const data = localStorage.getItem(USER_KEY_NAME);

  return data ? JSON.parse(data) : null;
};

export const saveUser = (userData) =>
  localStorage.setItem(USER_KEY_NAME, JSON.stringify(userData));

export const dropUser = () => localStorage.removeItem(USER_KEY_NAME);
