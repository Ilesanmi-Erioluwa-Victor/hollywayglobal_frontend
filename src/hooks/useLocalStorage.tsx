export const userToken = (token: string, id: string) => {
  window.localStorage.setItem(
    'Hollywayglobal_user',
    JSON.stringify({ token, id })
  );
};
