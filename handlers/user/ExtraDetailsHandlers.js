/**
 * Retrieves extra details from Firestore and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with extra details.
 */
const getExtraDetails = (req, _) => {
  const { response, firestore } = req;
  return response.respondJSON(firestore.read);
};

/**
 * Creates extra details in Firestore and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with extra details creation status.
 */
const createExtraDetails = (req, res) => {
  const { body, firestore } = req;
  const { name, role, level, communities, projects, training } = body;
  const details = {
    name,
    role,
    level: level ? level : NaN,
    communities: communities ? communities : [],
    projects: projects ? projects : [],
    training: training ? training : [],
  };
  return res.json({
    response: firestore.create(details),
  });
};

/**
 * Updates extra details in Firestore and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with extra details update status.
 */
const updateExtraDetails = (req, res) => {
  const { body, firestore } = req;
  const currentValues = firestore.read();
  const { name, role, level, community, project, train } = body;
  const updatedDetails = {
    name: name ? name : currentValues.name,
    role: role ? role : currentValues.role,
    level: level ? level : currentValues.level,
    communities: community
      ? currentValues.communities.push(community)
      : currentValues.communities,
    projects: project
      ? currentValues.projects.push(project)
      : currentValues.projects,
    training: train
      ? currentValues.training.push(train)
      : currentValues.training,
  };
  return res.json({
    response: firestore.update(updatedDetails),
  });
};

/**
 * Deletes extra details from Firestore and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with extra details deletion status.
 */
const deleteExtraDetails = (req, res) => {
  const { firestore } = req;
  return res.json({
    response: firestore.delete(),
  });
};

export {
  getExtraDetails,
  createExtraDetails,
  updateExtraDetails,
  deleteExtraDetails,
};
