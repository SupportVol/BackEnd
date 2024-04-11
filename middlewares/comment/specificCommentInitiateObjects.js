const specificCommentInitiateObjects = (req, res, next) => {
  const { id, commentID } = req.params;
  const comment = new Comment(id, commentID);
  req.commentInitialization = comment;
  next();
};
export default specificCommentInitiateObjects;
