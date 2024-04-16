const getTeamMember = async (req, res) => {
  const member = await req.teamMemberInstance.getMember();
  res.json({ member });
};
const createTeamMember = async (req, res) => {
  const response = await req.teamMemberInstance.createMember();
  res.json({ response });
};
const updateTeamMember = async (req, res) => {
  const response = await req.teamMemberInstance.updateMember();
  res.json({ response });
};
const deleteTeamMember = async (req, res) => {
  const response = await req.teamMemberInstance.deleteMember();
  res.json({ response });
};
export { getTeamMember, createTeamMember, updateTeamMember, deleteTeamMember };
