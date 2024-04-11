import Firestore from "../../firebaseCP/firestore";

export default class Project {
  constructor(
    organizerUID,
    name,
    description,
    organizationUID,
    members,
    term,
    startDate,
    endDate,
    projectID
  ) {
    this.organizerUID = organizerUID;
    this.organizationUID = organizationUID;
    this.name = name;
    this.description = description;
    this.members = members;
    this.term = term;
    this.startDate = startDate;
    this.endDate = endDate;
    this.projectID = projectID;
    this.prjFirestore = new Firestore("projects", this.projectID);
  }

  createAfter() {}
  async create() {
    try {
      const docRef = await Firestore.create(this);
      return [true, docRef.id];
    } catch (error) {
      return [false, error.message];
    }
  }

  async read() {
    try {
      const docSnapshot = await Firestore.read();
      if (!docSnapshot.exists) {
        return [false, "Document does not exist"];
      }
      return [true, docSnapshot.data()];
    } catch (error) {
      return [false, error.message];
    }
  }

  async update(data) {
    try {
      await Firestore.update(data);
      return [true, NaN];
    } catch (error) {
      return [false, error.message];
    }
  }
}
