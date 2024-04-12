import News from "../../models/admin/news.js";

const newsInitiateObjects = (req, res, next) => {
  const { title, description, tags, orgID, senderUID, postID } = req.body;
  req.newsInitialization = new News(
    title,
    description,
    tags,
    orgID,
    senderUID,
    postID
  );
  next();
};
export default newsInitiateObjects;
