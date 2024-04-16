// Importing necessary modules
import Firestore from "../../firebaseCP/firestore.js";
import updateData from "../../utils/firestore/updateData.js";
import EndeavorEntity from "./EndeavorEntity.js";

/**
 * Class representing an Initiative.
 * @extends EndeavorEntity
 */
export default class Initiative extends EndeavorEntity {
  /**
   * Create an Initiative.
   * @param {string} slogun - The slogun of the initiative.
   * @param {string} mission - The mission of the initiative.
   * @param {Array} objectives - The objectives of the initiative.
   * @param {string} introductory_video_URL - The URL of the introductory video.
   * @param {Array} projects - The projects of the initiative.
   */
  constructor(
    name,
    organizations,
    volunteers,
    started_date,
    expected_completing_date,
    initiated_organization,
    slogun,
    mission,
    objectives,
    introductory_video_URL,
    projects
  ) {
    super(
      name,
      organizations,
      volunteers,
      started_date,
      expected_completing_date,
      initiated_organization
    );
    this.slogun = slogun;
    this.mission = mission;
    this.objectives = objectives;
    this.introductory_video_URL = introductory_video_URL;
    this.projects = projects ?? [];
    this.collectionName = "initiative";
    this.fs = new Firestore(this.collectionName, this.initiativeID);
  }

  /**
   * Create a new initiative.
   * @return {Promise} A promise that resolves with the created initiative.
   */
  async create() {
    const initiativeData = {
      name: this.name,
      organizations: this.organizations,
      volunteers: this.volunteers,
      started_date: this.started_date,
      expected_completing_date: this.expected_completing_date,
      initiated_organization: this.initiated_organization,
      slogun: this.slogun,
      mission: this.mission,
      objectives: this.objectives,
      introductory_video_URL: this.introductory_video_URL,
      projects: this.projects,
    };

    return await this.fs.create(initiativeData);
  }

  /**
   * Update an existing initiative.
   * @return {Promise} A promise that resolves with the updated initiative.
   */
  async update() {
    const record = this.read();
    const updatedData = updateData(
      [
        "name",
        "organizations",
        "volunteers",
        "started_date",
        "expected_completing_date",
        "initiated_organization",
        "slogun",
        "mission",
        "objectives",
        "introductory_video_URL",
        "projects",
      ],
      [
        this.name,
        this.organizations,
        this.volunteers,
        this.started_date,
        this.expected_completing_date,
        this.initiated_organization,
        this.slogun,
        this.mission,
        this.objectives,
        this.introductory_video_URL,
        this.projects,
      ],
      record
    );
    return await this.fs.update(updatedData);
  }
}
