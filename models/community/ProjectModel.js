// Importing required modules
import Firestore from "../../firebaseCP/firestore.js";
import updateData from "../../utils/firestore/updateData.js";
import EndeavorEntity from "./EndeavorEntity.js";

/**
 * Project class extends EndeavorEntity
 * @param {string} description - Description of the project
 */
export default class Project extends EndeavorEntity {
  constructor(
    description,
    name,
    organizations,
    volunteers,
    started_date,
    expected_completing_date,
    initiated_organization, communityUID, initiativeUID = false,projectID
  ) {
    // Call the parent constructor with required parameters
    super(
      name,
      organizations,
      volunteers,
      started_date,
      expected_completing_date,
      initiated_organization,
      communityUID,

    );
    this.projectID = projectID
    // Initialize instance variables
    this.description = description;
    this.fs = new Firestore("projects", this.projectID, initiativeUID ? [communityUID, initiativeUID] : [communityUID]);
  }

  /**
   * Create a new project
   * @returns {Promise} - Promise representing the creation of the project
   */
  async create() {
    console.log(this);
    const hello = await this.fs.create({
      name: this.name,
      description: this.description,
      organizations: this.organizations,
      volunteers: this.volunteers,
      started_date: this.started_date,
      expected_completing_date: this.expected_completing_date,
      initiated_organization: this.initiated_organization,
    });
    console.log(hello);
    return hello
  }

  /**
   * Update an existing project
   * @returns {Promise} - Promise representing the update of the project
   */
  async update() {
    const record = await this.read();
    return await this.fs.update(
      updateData(
        [
          "name",
          "description",
          "organizations",
          "volunteers",
          "started_date",
          "expected_completing_date",
          "initiated_organization",
        ],
        [
          this.name,
          this.description,
          this.organizations,
          this.volunteers,
          this.started_date,
          this.expected_completing_date,
          this.initiated_organization,
        ],
        record
      )
    );
  }
}
