import Firestore from "../../firebaseCP/firestore.js";

export default class News {
  constructor(title, description, tags, orgID, senderUID, newsID) {
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.senderUID = senderUID;
    this.orgID = orgID;
    this.newsID = newsID;
    this.firestore = new Firestore("news", newsID, [orgID]);
  }

  async create() {
    return await this.firestore.create({
      title: this.title,
      description: this.description,
      tags: this.tags,
      senderUID: this.senderUID,
    });
  }

  async read() {
    return await this.firestore.read();
  }

  async update() {
    return await this.firestore.update({
      title: this.title,
      description: this.description,
      tags: this.tags,
      senderUID: this.senderUID,
    });
  }

  async delete() {
    return await this.firestore.delete(this.postID);
  }

  async readAll() {
    try {
      let paths = await this.firestore.readPaths();
      paths = paths[1];
      let allDocs = {};
      for (let i = 0; i < paths.length; i++) {
        const iterFirestore = new Firestore("news", paths[i], [this.orgID]);
        allDocs[paths[i]] = iterFirestore.read();
      }
      return allDocs;
    } catch (error) {
      console.log(error);
    }
  }
}
