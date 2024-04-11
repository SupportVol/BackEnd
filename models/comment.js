import Firestore from "../firebaseCP/firestore.js";

export default class Comment {
  constructor(id, commentID) {
    this.collectionName = "comments";
    this.nestedPath = [id]; // the id is of the event or whatever it is wage uk?
    this.commentID = commentID;
    this.firestore = new Firestore(
      this.collectionName,
      commentID,
      this.nestedPath
    );
  }

  async createComment(senderuid, commentTxt) {
    return await this.firestore.create({
      senderUID: senderuid,
      sent_Date: new Date(),
      comment: commentTxt,
    });
  }

  async readComment() {
    return await this.firestore.read();
  }

  async updateComment(commentTxt = null, senderuid = null) {
    return await this.firestore.update({
      comment: commentTxt,
      edited_Date: new Date(),
      senderuid: senderuid,
    });
  }
  async deleteComment() {
    return await this.firestore.delete();
  }

  async readComments() {
    try {
      let paths = await this.firestore.readPaths();
      paths = paths[1];
      let allDocs = {};
      for (let i = 0; i < paths.length; i++) {
        const iterFirestore = new Firestore(this.collectionName, paths[i]);
        const docSnapshot = await iterFirestore.read();
        allDocs[paths[i]] = docSnapshot[1];
      }
      return [true, allDocs];
    } catch (error) {
      return [false, error.message];
    }
  }
}
