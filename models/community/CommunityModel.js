import Firestore from '../../firebaseCP/firestore.js'
import FirestoreAbstract from '../../utils/firestore/FirestoreAbstract.js'
import updateData from '../../utils/firestore/updateData.js'
/**
 * Represents a Community object.
 * @class
 * @extends FirestoreAbstract
 */
export default class Community extends FirestoreAbstract {
  /**
   * Create a new Community object.
   * @param {string} communityUID - The unique identifier for the community.
   * @param {string} name - The name of the community.
   * @param {string} title - The title of the community.
   * @param {string} description - A description of the community.
   * @param {string} photoUrl - The URL of the community's photo.
   * @param {string} banner - The banner of the community.
   * @param {string} theme - The theme of the community.
   * @param {Array} members - The members of the community.
   */
  constructor (
    communityUID,
    name,
    title,
    description,
    photoUrl,
    banner,
    theme,
    members
  ) {
    super() // Call the parent class constructor
    this.collectionName = 'communities'
    this.communityUID = communityUID
    this.name = name
    this.title = title
    this.description = description
    this.photoUrl = photoUrl
    this.banner = banner
    this.theme = theme
    this.members = members
    this.createStructure = {
      name,
      title,
      description,
      photoUrl,
      banner,
      theme,
      members
    }
    this.fs = new Firestore(this.collectionName, this.communityUID, [])
    const record = this.fs.read()
    this.updateStructure = updateData(
      [
        'name',
        'title',
        'description',
        'photoUrl',
        'banner',
        'theme',
        'members'
      ],
      [name, title, description, photoUrl, banner, theme, members],
      record
    )
    // Initialize Firestore with the collection name and community UID
  }
}
