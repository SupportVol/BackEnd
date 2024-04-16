import Firestore from "../../firebaseCP/firestore.js";
import firebaseDate from "../../utils/helper/firebaseDate.js";
/**
 * EndeavorEntity class represents an endeavor in the community.
 * It provides methods to interact with the Firestore database.
 */
export default class EndeavorEntity {
  /**
   * Create a new EndeavorEntity.
   * @param {string} name - The name of the endeavor.
   * @param {Array} organizations - The organizations involved in the endeavor.
   * @param {Array} volunteers - The volunteers involved in the endeavor.
   * @param {string} started_date - The date when the endeavor started.
   * @param {string} expected_completing_date - The expected completion date of the endeavor.
   * @param {string} initiated_organization - The organization that initiated the endeavor.
   */
  constructor(
    name,
    organizations = [],
    volunteers = [],
    started_date,
    expected_completing_date,
    initiated_organization,
    communityUID
  ) {
    this.name = name;
    this.organizations = organizations;
    this.volunteers = volunteers;
    // Convert string to Date object
    // const startedDate = new Date(Number(started_date[0]), Number(started_date[1]), Number(started_date[2]));
    // const expectedCompletingDate = new Date(Number(expected_completing_date[0]), Number(expected_completing_date[1]), Number(expected_completing_date[2]));
    this.started_date = started_date // firebaseDate(false, startedDate);
    this.expected_completing_date = expected_completing_date // firebaseDate(false, expectedCompletingDate);
    this.initiated_organization = initiated_organization;
    this.communityUID = communityUID
    this.fs = new Firestore("endeavors");
  }

  /**
   * Delete the endeavor from the Firestore database.
   * @returns {Promise} A promise that resolves when the deletion is complete.
   */
  delete() {
    return this.fs.delete();
  }

  /**
   * Read all endeavors from the Firestore database.
   * @returns {Promise} A promise that resolves with all the endeavors.
   */
  readAll() {
    return this.fs.readAll();
  }

  /**
   * Read the current endeavor from the Firestore database.
   * @returns {Promise} A promise that resolves with the endeavor data if it exists, or with an error message if it does not.
   */
  async read() {
    const docSnapshot = await this.fs.read();
    return [true, docSnapshot];
  }
}
