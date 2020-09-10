export const setToken = (token: string) => {
  sessionStorage.setItem('token', token);
};

export const deleteToken = () => {
  sessionStorage.clear();
};

export const decodeToken = (token: string):any => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return { error: e };
  }
};
