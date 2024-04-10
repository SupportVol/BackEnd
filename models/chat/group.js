import Firestore from "../../firebaseCP/firestore.js";

/**
 * Represents a group within the application.
 */
export default class Group {
  /**
   * Creates an instance of Group.
   * @param {string} uid - The user ID.
   * @param {string} groupID - The group ID.
   */
  constructor(uid, groupID) {
    this.uid = uid;
    this.groupID = groupID;
    this.firestore = new Firestore("chatGroups", this.groupID);
    this.eventFirestore = new Firestore("events", this.groupID);
  }

  /**
   * Creates a new group.
   * @param {Object} dataDict - The dictionary containing group data.
   * @returns {Promise} A promise indicating the success of the operation.
   */
  createGroup(dataDict) {
    this.eventFirestore.read();
    return this.firestore.create({
      ...dataDict,
      groupID: this.groupID,
      requestUID: this.uid,
    });
  }

  /**
   * Updates an existing group.
   * @param {Object} updateDataDict - The dictionary containing updated group data.
   * @returns {Promise} A promise indicating the success of the operation.
   */
  updateGroup(updateDataDict) {
    return this.firestore.update({
      ...updateDataDict,
      groupID: this.groupID,
      requestUID: this.uid,
    });
  }

  /**
   * Deletes the group.
   * @returns {Promise} A promise indicating the success of the operation.
   */
  deleteGroup() {
    return this.firestore.delete();
  }

  /**
   * Reads the group data.
   * @returns {Promise} A promise containing the group data.
   */
  readGroup() {
    return this.firestore.read();
  }
}
