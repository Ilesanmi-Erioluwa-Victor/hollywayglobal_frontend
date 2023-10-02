export const userToken = (token: string, id: string) => {
  window.localStorage.setItem('userInfo', JSON.stringify({ token, id }));
};
