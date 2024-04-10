/**
 * Represents a message in a group.
 */
import RealTime from "../../firebaseCP/realtime.js";
import Group from "./group.js";

export default class Message {
  /**
   * Constructs a new Message object.
   * @param {string} groupID - The ID of the group to which the message belongs.
   */
  constructor(groupID) {
    this.groupID = groupID;
    this.realTimeDatabase = new RealTime(groupID);
    this.group = new Group(groupID);
  }

  /**
   * Creates a new message in the group.
   * @param {string} message - The content of the message.
   * @param {string} uid - The user ID of the sender.
   * @returns {Array} - An array containing a boolean indicating success or failure, and the ID of the created message.
   */
  async createMessage(message, uid) {
    try {
      const messageRef = await this.realTimeDatabase.create({
        from: uid,
        message,
        groupID: this.groupID,
      });
      return [true, messageRef.id];
    } catch (error) {
      return [false, error.message];
    }
  }

  /**
   * Retrieves all messages in the group.
   * @returns {Array} - An array containing a boolean indicating success or failure, and an array of messages.
   */
  async readAllMessages() {
    try {
      const messages = await this.realTimeDatabase.read();
      return [true, messages];
    } catch (error) {
      return [false, error.message];
    }
  }

  // Uncomment this method if needed
  // /**
  //  * Updates a message in the group.
  //  * @param {string} messageID - The ID of the message to update.
  //  * @param {string} newMessage - The updated message content.
  //  * @returns {Array} - An array containing a boolean indicating success or failure, and the ID of the updated message.
  //  */
  // async updateMessage(messageID, newMessage) {
  //   try {
  //     const messageRef = await this.realTimeDatabase.update(messageID, {
  //       message: newMessage,
  //       groupID: this.groupID,
  //     });
  //     return [true, messageRef.id];
  //   } catch (error) {
  //     return [false, error.message];
  //   }
  // }

  /**
   * Deletes a message from the group.
   * @param {string} messageID - The ID of the message to delete.
   * @returns {Array} - An array containing a boolean indicating success or failure, and the ID of the deleted message.
   */
  async deleteMessage(messageID) {
    try {
      const messageRef = await this.realTimeDatabase.delete(messageID);
      return [true, messageRef.id];
    } catch (error) {
      return [false, error.message];
    }
  }
}
