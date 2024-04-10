import Initiative from "../../models/community/initiatives/initiative.js";

const iInitiateObjects = (req, res, next) => {
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
  req.qpInstance = new Initiative(
    quickProjectID,
    communityID,
    eventID,
    orgId,
    title,
    description,
    start_date ? end_date : Date(),
    end_date,
    term,
    members
  );
  next();
};

export default iInitiateObjects;
