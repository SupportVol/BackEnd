import Auth from "../../models/auth.js";
const authInitiateObjects = (req, res, next) => {
  if (req.url === "/signup") {
    req.auth = new Auth(
      req.headers.email,
      req.headers.password,
      req.headers.name
    );
  } else {
    req.auth = new Auth(req.headers.email, req.headers.password);
  }
  console.log(req.auth);
  next();
};
export default authInitiateObjects;
