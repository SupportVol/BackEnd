import FirestoreAbstract from "../../utils/firestore/FirestoreAbstract.js";
import Firestore from "../../firebaseCP/firestore.js";
import isArray from "../../utils/validation/isArray.js";
export default class Training extends FirestoreAbstract {
  constructor(
    name,
    description,
    location,
    trainer,
    participants,
    // feedback,
    status,
    additional_notes,
    orgID
  ) {
    this.createStructure = {
      name: name,
      description: description,
      location: location,
      trainer: trainer,
      participants: participants,
      // feedback: feedback,
      status: status,
      additional_notes: additional_notes,
      creationDate: Date.now(),
    };
    const currentRecord = this.read();
    this.updateStructure = {
      name: name ?? currentRecord.name,
      description: description ?? currentRecord.description,
      location: location ?? currentRecord.location,
      trainer: trainer ?? currentRecord.trainer,
      participants: isArray(participants, currentRecord.participants),
      // feedback: feedback,
      status: status ?? currentRecord.status,
      additional_notes: additional_notes ?? currentRecord.additional_notes,
      creationDate: Date.now(),
    };
    this.fs = new Firestore("training", false, [orgID]);
  }
}
