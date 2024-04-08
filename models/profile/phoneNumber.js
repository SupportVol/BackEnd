import auth from "../../config/firebase.js";
// Retrieve the user by uid
export default class phoneNumber {
  constructor(uid) {
    this.uid = uid;
  }
  async update(newPhoneNumber) {
    // const userRecords = await auth.getUser(this.uid);
    const userRecord = await auth.updateUser(this.uid, {
      phoneNumber: newPhoneNumber,
    });
    console.log(userRecord);
    return true, userRecord.toJSON().phoneNumber;
  }
  async get() {
    const user = await auth.getUser(this.uid);
    return true, user.phoneNumber;
  }
}
