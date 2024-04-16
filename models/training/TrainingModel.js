import FirestoreAbstract from "../../utils/firestore/FirestoreAbstract.js";
import Firestore from "../../firebaseCP/firestore.js";
import updateData from "../../utils/firestore/updateData.js";
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
    orgID,
    trainID
  ) {
    super();
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
    this.fs = new Firestore("training", trainID, []);
    const currentRecord = this.read();
    this.updateStructure = updateData(
      [
        "name",
        "description",
        "location",
        "trainer",
        "participants",
        "status",
        "additional_notes",
        "creationDate",
        "orgID"
      ],
      [
        name,
        description,
        location,
        trainer,
        participants,
        status,
        additional_notes,
        Date.now(),
        orgID
      ],
      currentRecord
    );
  }
}
