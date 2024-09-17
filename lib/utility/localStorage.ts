export const setUserIntoLocalStorage = function (userData: string) {
  localStorage.setItem('user', userData);
};

export const getAuthStatus = function () {
  return localStorage.getItem('user');
};

export const removeUserFromLocalStorage = function () {
  localStorage.removeItem('user');
};

export const setDummyUserIntoLocalStorage = function (user: string) {
  localStorage.setItem('dummyUser', user);
};

export const getDummyUser = function () {
  return localStorage.getItem('dummyUser');
};
