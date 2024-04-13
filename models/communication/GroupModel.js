import Firestore from "../../firebaseCP/firestore.js";
import isArray from "../../utils/validation/isArray.js";
import CommunicationEntity from "./CommunicationEntity.js";

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
  constructor(members = [], name, description, projectID) {
    super(projectID); // Call the super class constructor and pass in the projectID
    this.projectID = projectID;
    this.firestore = new Firestore("chatGroups", this.projectID);

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
      creationDate: Date.now(),
    };

    // Read the group from firestore
    this.group = this.firestore.read();

    // Structure for updating a group
    this.updateStructure = {
      members: isArray(this.members, this.group.members),
      name: this.name ?? this.group.name,
      description: this.description ?? this.group.description,
      updatedDate: Date.now(),
    };
  }
}