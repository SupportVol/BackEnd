import MembershipRequestModel from '../../models/organization/MemebershipRequestModel.js'
import isAuthorized from '../../utils/validation/isAuthorized.js'

const membershipInitiateObjects = (req, res, next) => {
  const response = isAuthorized(req.uid, ['Admin'], [1, 0], req)
  if (Array.isArray(response)) {
    res.json({ response })
  }
  const {
    registrationCertificateUrl,
    annualReportUrl,
    legalDocumentsUrl,
    name,
    email,
    password,
    description,
    requestID
  } = req.body
  req.membershipInstance = new MembershipRequestModel(
    registrationCertificateUrl,
    annualReportUrl,
    legalDocumentsUrl,
    name,
    email,
    password,
    description,
    requestID
  )
  next()
}

export default membershipInitiateObjects
