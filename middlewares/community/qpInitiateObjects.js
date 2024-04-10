import QuickProject from "../../models/community/quick_projects/quick_project";

const qpInitiateObjects = (req, res, next) => {
  const {
    quickProjectID,
    communityID,
    eventID,
    orgId,
    title,
    description,
    start_date,
    end_date,
    term,
    members,
  } = req.headers;
  req.qpInstance = new QuickProject(
    quickProjectID,
    communityID,
    eventID,
    orgId,
    title,
    description,
    start_date,
    end_date,
    term,
    members
  );
  next();
};

export default qpInitiateObjects;
