const getMembershipRequests = (req, res) => {
  const response = req.membershipInstance.readAll();
  res
    .sendStatus(200)
    .statusMessage("Successfully fetched all membership requests")
    .json({ response: response });
};
const approveMembershipRequest = (req, res) => {
  const response = req.membershipInstance.approve();
  res.sendStatus(200).json({ response: response });
};
const declineMembershipRequest = (req, res) => {
  const response = req.membershipInstance.decline();
  res.sendStatus(200).json({ response: response });
};
export {
  getMembershipRequests,
  approveMembershipRequest,
  declineMembershipRequest,
};
