import Firestore from "../../firebaseCP/firestore.js";
import CommunicationEntity from "./CommunicationEntity.js";
import getProjectMembers from "../../utils/data/getProjectMembers.js";
import updateData from "../../utils/firestore/updateData.js";
/**
 * Group class extends CommunicationEntity
 * Represents a group in the communication model
 */
export default class Group extends CommunicationEntity {
  /**
   * Group constructor
   * @param {Array} members - Array of group members
   * @param {string} name - Name of the group
   * @param {string} description - Description of the group
   * @param {string} projectID - ID of the project the group is associated with
   */
  constructor(members = [], name, description, projectID, groupID) {
    super(projectID); // Call the super class constructor and pass in the projectID
    this.projectID = projectID;
    this.db = new Firestore("chatGroups", groupID);

    // If members array is empty, get members from the project
    this.members =
      members.length === 0 ? getProjectMembers(projectID) : members;
    this.name = name;
    this.description = description;

    // Structure for creating a new group
    this.createStructure = {
      members: this.members,
      name: this.name,
      description: this.description,
      projectID:this.projectID,
      creationDate: Date.now(),
    };

    // Read the group from firestore
    this.group = this.db.read();

    // Structure for updating a group
    this.updateStructure = updateData(
      ["members", "name", "description", "updateData", 'projectID'],
      [this.members, this.name, this.description, Date.now(), this.projectID],
      this.group
    );
  }
}
