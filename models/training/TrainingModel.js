import FirestoreAbstract from "../../utils/firestore/FirestoreAbstract.js";

export default class Training extends FirestoreAbstract {
  constructor() {
    this.name = name;
    this.description = description;
    this.location = location;
    this.trainer = trainer;
    this.participants = participants;
    this.feedback = feedback;
    this.status = status;
    this.additional_notes = additional_notes;
    this.createStructure = {};
  }
}
