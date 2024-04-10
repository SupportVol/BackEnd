import { Firestore } from "../../../firebaseCP/firestore.js";
export default class Initiative {
  constructor(
    initiativeID,
    communityID,
    eventIDs,
    orgId,
    title,
    description,
    start_date,
    end_date,
    term,
    members
  ) {
    this.initiativeID = initiativeID;
    this.communityID = communityID;
    this.eventIDs = eventIDs ? eventIDs : [];
    this.orgId = orgId;
    this.title = title;
    this.description = description;
    this.start_date = start_date;
    this.end_date = end_date;
    this.term = term;
    this.members = members ? members : [];
    this.collectionName = "initiative";
    this.initiativeFS = new Firestore(this.collectionName, this.initiativeID);
  }

  createI() {
    return this.initiativeFS.create({
      title: this.title,
      description: this.description,
      start_date: this.start_date,
      end_date: this.end_date,
      term: this.term,
      members: this.members,
      orgId: this.orgId,
      eventID: this.eventID,
      communityID: this.communityID,
    });
  }
  updateI() {
    return this.initiativeFS.update({
      title: this.title,
      description: this.description,
      start_date: this.start_date,
      end_date: this.end_date,
      term: this.term,
      members: this.members,
      orgId: this.orgId,
      eventID: this.eventID,
      communityID: this.communityID,
    });
  }
  deleteI() {
    return this.initiativeFS.delete();
  }

  async readIAll() {
    try {
      let paths = await this.initiativeFS.readPaths();
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
  readI() {
    return this.initiativeFS.read();
  }
}
