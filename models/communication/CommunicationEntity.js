/**
 * CommunicationEntity class
 * This class represents a communication entity in the system.
 */
export default class CommunicationEntity {
  /**
   * CommunicationEntity constructor
   * @param {string} groupID - The ID of the group
   */
  constructor (groupID) {
    this.groupID = groupID
  }

  /**
   * Create a new communication entity
   * @returns {Promise} - A promise that resolves when the entity is created
   */
  create () {
    return this.db.create(this.createStructure)
  }

  /**
   * Update an existing communication entity
   * @returns {Promise} - A promise that resolves when the entity is updated
   */
  update () {
    return this.db.update(this.updateStructure)
  }

  /**
   * Delete a communication entity
   * @returns {Promise} - A promise that resolves when the entity is deleted
   */
  delete () {
    return this.db.delete(this.id)
  }

  /**
   * Read a communication entity
   * @returns {Promise} - A promise that resolves with the entity data
   */
  read () {
    return this.db.read()
  }

  /**
   * Read all communication entities
   * @returns {Promise} - A promise that resolves with all entity data
   */
  readAll () {
    return this.db.readAll()
  }
}
