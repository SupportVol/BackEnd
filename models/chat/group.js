// import { Authentication } from "../../firebaseCP/authentication.js";
import Firestore from "../../firebaseCP/firestore.js";

export default class Group {
  constructor(uid, groupID) {
    this.uid = uid;
    this.groupID = groupID;
    this.firestore = new Firestore("chatGroups", this.groupID);
    this.eventFirestore = new Firestore("events", this.eventID);
  }

  createGroup(dataDict) {
    this.eventFirestore.read();
    return this.firestore.create({
      groupID: this.groupID,
      eventID: dataDict.eventID,
      adminUID: dataDict.adminUID,
      description: dataDict.description,
      members: dataDict.members,
      requestUID: this.uid,
    });
  }
  updateGroup(updateDataDict) {
    return this.firestore.update({
      groupID: this.groupID,
      eventID: updateDataDict.eventID,
      adminUID: updateDataDict.adminUID,
      description: updateDataDict.description,
      members: updateDataDict.members,
      requestUID: this.uid,
    });
  }

  deleteGroup() {
    return this.firestore.delete();
  }

  readGroup() {
    return this.firestore.read();
  }
}
