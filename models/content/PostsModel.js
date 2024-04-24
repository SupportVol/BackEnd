// Importing necessary modules
import Firestore from '../../firebaseCP/firestore.js'
import Article from './ArticleEntity.js'

/**
 * Post class that extends the Article class.
 * @class
 * @extends Article
 */
export default class Post extends Article {
  /**
   * Post constructor.
   * @param {string} postID - The ID of the post.
   * @param {string} title - The title of the post.
   * @param {string} description - The description of the post.
   * @param {Array} tags - The tags associated with the post.
   * @param {string} senderUID - The UID of the sender.
   * @param {string} orgID - The ID of the organization.

   */
  constructor (title, description, tags, senderUID, orgID, postID) {
    // Call the parent constructor
    super(title, description, tags, senderUID, orgID)

    // Initialize properties
    this.postID = postID
    this.type = 'posts'

    // Create a new Firestore instance
    this.firestore = new Firestore(this.type, postID, [])
  }
}
