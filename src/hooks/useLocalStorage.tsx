export const setStudentToken = (token: string) => {
  window.localStorage.setItem('Hollywayglobal_user', token);
};
