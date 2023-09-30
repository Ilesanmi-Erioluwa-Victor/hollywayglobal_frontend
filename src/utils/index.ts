// export class Util {
//   static baseUrlDev: 'http://localhost:8080/api/v1/';
export function getUserDataFromLocalStorage() {
  const userData = JSON.parse(
    localStorage.getItem('Hollywayglobal_user') as string
  );
  if (!userData || !userData.token || !userData.id) {
    throw new Error('No user found');
  }
  const { token, id } = userData;
  return { token, id };
}

export function createAuthHeaders(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
