/**
 * Represents a message in a group.
 */
import RealTime from "../../firebaseCP/realtime.js";
import CommunicationEntity from "./CommunicationEntity.js";
import Group from "./GroupModel.js";

/**
 * Message class extends CommunicationEntity.
 * It represents a message in a group.
 */
export default class Message extends CommunicationEntity {
  /**
   * Message constructor.
   * @param {string} message - The message content.
   * @param {string} uid - The user ID who sends the message.
   * @param {string} groupID - The group ID where the message is sent.
   * @param {string} messageID - The ID of the message.
   * @param {string} newMessage - The updated message content.
   */
  constructor(message, uid, groupID, messageID, newMessage) {
    super(groupID);
    this.message = message;
    this.uid = uid;
    this.groupID = groupID;
    this.realTimeDatabase = new RealTime(groupID);
    this.group = new Group(groupID);

    // Structure for creating a new message
    this.createStructure = {
      from: this.uid,
      message: this.message,
      timestamp: Date.now(),
    };

    // Read the message from the database
    this.message = this.realTimeDatabase.read(messageID);

    // Structure for updating a message
    this.updateStructure = {
      message: newMessage ?? this.message.message,
      lastUpdatedTime: Date.now(),
    };
  }
}
