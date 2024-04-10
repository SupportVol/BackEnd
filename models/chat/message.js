import RealTime from "../../firebaseCP/realtime.js";
import Group from "./group.js";

export default class Message {
  constructor(groupID) {
    this.groupID = groupID;
    this.realTimeDatabase = new RealTime(this.groupID);
    this.group = new Group(this.groupID);
  }

  async createMessage(message, uid) {
    try {
      const messageRef = await this.realTimeDatabase.create({
        from: uid,
        message: message,
        groupID: this.groupID,
      });
      return [true, messageRef.id];
    } catch (error) {
      return [false, error.message];
    }
  }

  async readAllMessages() {
    try {
      const messages = await this.realTimeDatabase.read();
      return [true, messages];
    } catch (error) {
      return [false, error.message];
    }
  }
  //   async updateMessage(messageID, newMessage) {
  //     try {
  //       const messageRef = await this.realTimeDatabase.update(messageID, {
  //         message: newMessage,
  //         groupID: this.groupID,
  //       });
  //       return [true, messageRef.id];
  //     } catch (error) {
  //       return [false, error.message];
  //     }
  //   }

  async deleteMessage(messageID) {
    try {
      const [response, msg] = this.group.read();
      const messageRef = await this.realTimeDatabase.delete(messageID);
      return [true, messageRef.id];
    } catch (error) {
      return [false, error.message];
    }
  }
}
