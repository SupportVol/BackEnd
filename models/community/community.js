import Firestore from "../../firebaseCP/firestore.js";

export default class Community {
  constructor(uid, communityUID) {
    this.uid = uid;
    this.collectionName = "communities";
    this.communityUID = communityUID;
    this.prjFirestore = new Firestore(this.collectionName, this.communityUID);
  }

  async create(userData) {
    //   {
    //     name: this.name,models/community/community.js
    //     description: this.description,
    //     members: this.members,
    //     organizations: this.organizations,
    //     quickprojects: this.quickprojects,
    //     initiatives: this.initiatives,
    //   }
    try {
      return await this.prjFirestore.create(userData);
    } catch (error) {
      return [false, error.message];
    }
  }

  async read() {
    try {
      let paths = await this.prjFirestore.readPaths();
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

  async update(userData) {
    try {
      await this.prjFirestore.update(userData);
      return [true, NaN];
    } catch (error) {
      return [false, error.message];
    }
  }

  async delete() {
    try {
      await this.prjFirestore.delete();
      return [true, NaN];
    } catch (error) {
      return [false, error.message];
    }
  }
}
