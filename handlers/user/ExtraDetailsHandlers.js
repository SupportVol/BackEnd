import { response } from 'express';
import updateData from '../../utils/firestore/updateData.js';
/**
 * Retrieves extra details from Firestore and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with extra details.
 */
const getExtraDetails = async (req, res) => {
  const { firestore } = req;
  // return response.respondJSON(firestore.read);
  // console.log(firestore.read);
  return res.json({
    response: await firestore.read(),
  });
};

/**
 * Creates extra details in Firestore and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with extra details creation status.
 */
const createExtraDetails = async (req, res) => {
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
    response: await firestore.create(details),
  });
};

/**
 * Updates extra details in Firestore and sends a JSON response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - JSON response with extra details update status.
 */
const updateExtraDetails = async (req, res) => {
  const { body, firestore } = req;
  const currentValues = await firestore.read();
  const { name, role, level, community, project, train } = body;
  const updatedDetails = updateData(
    ["name", "role", "level", "communities", "projects", "training"],
    [name, role, level, community, project, train],
    currentValues[1]
  );
  return res.json({
    response: await firestore.update(updatedDetails),
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
    // response: firestore.delete(),
    response: "Successfully Deleted",
  });
};

export {
  getExtraDetails,
  createExtraDetails,
  updateExtraDetails,
  deleteExtraDetails,
};
