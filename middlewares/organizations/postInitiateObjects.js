import Post from "../../models/organizations/posts.js";

const postInitiateObjects = (req, res, next) => {
  const { title, description, tags, orgID, senderUID, postID } = req.body;
  req.postInitialization = new Post(
    title,
    description,
    tags,
    orgID,
    senderUID,
    postID
  );
  next();
};
export default postInitiateObjects;
