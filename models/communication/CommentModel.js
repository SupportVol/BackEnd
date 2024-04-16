import Firestore from "../../firebaseCP/firestore.js";
import updateData from "../../utils/firestore/updateData.js";
import CommunicationEntity from "./CommunicationEntity.js";

/**
 * Comment class that extends the CommunicationEntity class.
 * This class is used to create and manage comments in the Firestore database.
 */
export default class Comment extends CommunicationEntity {
  /**
   * Comment constructor.
   * @param {string} id - The ID of the event or whatever it is.
   * @param {string} commentID - The ID of the comment.
   * @param {string} senderuid - The UID of the sender.
   * @param {string} commentTxt - The text of the comment.
   */
  constructor(id, commentID, senderuid, commentTxt) {
    super(); // Call the parent class constructor
    this.collectionName = "comments";
    this.nestedPath = [id]; // the id is of the event or whatever it is wage uk?
    this.commentID = commentID;
    this.firestore = new Firestore(
      this.collectionName,
      commentID,
      this.nestedPath
    );
    this.createStructure = {
      senderUID: senderuid,
      creationDate: Date.now(),
      comment: commentTxt,
    };
    this.comment = this.firestore.read();
    this.updateStructure = this.getUpdateStructure(senderuid, commentTxt);
  }

  /**
   * Get the structure for updating a comment.
   * @param {string} senderuid - The UID of the sender.
   * @param {string} commentTxt - The text of the comment.
   * @returns {Object} The structure for updating a comment.
   */
  getUpdateStructure(senderuid, commentTxt) {
    return updateData(
      ["comment", "updateDate", "senderuid"],
      [commentTxt, Date.now(), senderuid],
      this.comment
    );
  }
}
