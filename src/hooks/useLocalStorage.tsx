export const userToken = (token: string) => {
  window.localStorage.setItem('Hollywayglobal_user', token);
};
