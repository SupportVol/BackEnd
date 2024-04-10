const isAuthorized = async (uid) => {
  const authFS = new Firestore("users", uid);
  const userData = await authFS.read();
  return userData["Role"] === "admin" || userData["Role"] === "org";
};
export default isAuthorized;
