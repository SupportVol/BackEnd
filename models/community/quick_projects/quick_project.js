import Firestore from "../../../firebaseCP/firestore.js";
export default class QuickProject {
  constructor(
    quickProjectID,
    communityUID,
    eventID,
    orgId,
    title,
    description,
    start_date,
    end_date,
    term,
    members
  ) {
    this.quickProjectID = quickProjectID;
    this.communityUID = communityUID;
    this.eventID = eventID;
    this.orgId = orgId;
    this.title = title;
    this.description = description;
    this.start_date = start_date;
    this.end_date = end_date;
    this.term = term;
    this.members = members || [];
    this.collectionName = "quickProjects";
    this.quickProjectFS = new Firestore(
      this.collectionName,
      this.quickProjectID
    );
  }

  createQP() {
    return this.quickProjectFS.create({
      title: this.title,
      description: this.description,
      start_date: this.start_date,
      end_date: this.end_date,
      term: this.term,
      members: this.members,
      orgId: this.orgId,
      eventID: this.eventID,
      communityUID: this.communityUID,
    });
  }
  updateQP() {
    return this.quickProjectFS.update({
      title: this.title,
      description: this.description,
      start_date: this.start_date,
      end_date: this.end_date,
      term: this.term,
      members: this.members,
      orgId: this.orgId,
      eventID: this.eventID,
      communityUID: this.communityUID,
    });
  }
  deleteQP() {
    return this.quickProjectFS.delete();
  }

  async readQPAll() {
    try {
      let paths = await this.quickProjectFS.readPaths();
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
  } // Reusable
  readQP() {
    return this.quickProjectFS.read();
  }
}
