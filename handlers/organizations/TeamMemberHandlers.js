const getTeamMember = async (req, res) => {
  const member = await req.teamMemberInstance.getMember();
  res.json({ member: member });
};
const createTeamMember = async (req, res) => {
  const response = await req.teamMemberInstance.createMember();
  res.json({ response: response });
};
const updateTeamMember = async (req, res) => {
  const response = await req.teamMemberInstance.updateMember();
  res.json({ response: response });
};
const deleteTeamMember = async (req, res) => {
  const response = await req.teamMemberInstance.deleteMember();
  res.json({ response: response });
};
export { getTeamMember, createTeamMember, updateTeamMember, deleteTeamMember };
