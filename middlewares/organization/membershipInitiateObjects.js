import MembershipRequestModel from "../../models/organization/MemebershipRequestModel";
import isAuthorized from "../../utils/validation/isAuthorized";

const membershipInitiateObjects = (req, res, next) => {
  const response = isAuthorized(req.uid, ["Admin"], [1, 0], req);
  if (Array.isArray(response)) {
    res.json({ response });
  }
  const {
    registrationCertificateUrl,
    annualReportUrl,
    legalDocumentsUrl,
    name,
    email,
    password,
    description,
  } = req.body;
  req.membershipInstance = new MembershipRequestModel(
    registrationCertificateUrl,
    annualReportUrl,
    legalDocumentsUrl,
    name,
    email,
    password,
    description
  );
  next();
};

export default membershipInitiateObjects;
