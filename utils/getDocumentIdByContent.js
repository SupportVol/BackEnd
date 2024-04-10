/**
 * Retrieves the document ID based on the content provided in the query dictionary.
 * @param {Object} collection - Firestore collection reference.
 * @param {Object} queryDict - Dictionary containing query fields and their corresponding values.
 * @returns {string|Error} - Document ID if found, otherwise an error message.
 */
const getDocumentIdByContent = async (collection, queryDict) => {
  try {
    let query = collection;
    // Construct the query based on the provided query dictionary
    for (const field in queryDict) {
      query = query.where(field, "==", queryDict[field]);
    }
    // Execute the query
    const querySnapshot = await query.get();
    // If no document is found, throw an error
    if (querySnapshot.empty) {
      throw new Error("No document found with the provided content");
    }
    // Retrieve the document ID from the query result
    const doc = querySnapshot.docs[0];
    return doc.id;
  } catch (error) {
    // Return the error message
    return error.message;
  }
};

export default getDocumentIdByContent;
