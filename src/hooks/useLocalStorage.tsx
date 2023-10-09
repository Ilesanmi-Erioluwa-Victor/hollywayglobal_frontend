export const userToken = (token: string, id: string) => {
  window.localStorage.setItem("userInfo", JSON.stringify({ token, id }));
};

export const useStoredData = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo") as string)
  : null;
