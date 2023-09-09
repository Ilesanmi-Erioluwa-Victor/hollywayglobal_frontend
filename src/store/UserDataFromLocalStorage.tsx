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
