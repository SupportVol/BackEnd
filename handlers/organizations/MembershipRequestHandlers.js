const getMembershipRequests = async (req, res) => {
  const showAll = req.body.all ?? false;
  let response;
  if (showAll) {
    response = await req.membershipInstance.read();
  } else {
    response = await req.membershipInstance.readAll();
  }
  res
    .sendStatus(200)
    .statusMessage("Successfully fetched all membership requests")
    .json({ response });
};
const approveMembershipRequest = (req, res) => {
  const response = req.membershipInstance.approve();
  res.sendStatus(200).json({ response });
};
const declineMembershipRequest = (req, res) => {
  const response = req.membershipInstance.decline();
  res.sendStatus(200).json({ response });
};
export {
  getMembershipRequests,
  approveMembershipRequest,
  declineMembershipRequest,
};
