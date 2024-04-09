import { Firestore } from "../../firebaseCP/firestore";

export default class Group {
  constructor(groupID, eventID, description, adminUID) {
    this.groupID = groupID;
    this.eventID = eventID;
    this.adminUID = adminUID;
    this.description = description;
    this.firestore = new Firestore("chatGroups", this.groupID);
    this.eventFirestore = new Firestore("events", this.eventID);
  }

  createGroup() {
    this.eventFirestore.read();
    return this.firestore.create({
      groupID: this.groupID,
      eventID: this.eventID,
      adminUID: this.adminUID,
      description: this.description,
    });
  }
  updateGroup() {
    return this.firestore.update({
      groupID: this.groupID,
      eventID: this.eventID,
      adminUID: this.adminUID,
      description: this.description,
    });
  }

  deleteGroup() {
    return this.firestore.delete();
  }

  readGroup() {
    return this.firestore.read();
  }
}
