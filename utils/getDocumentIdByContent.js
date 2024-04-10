const getDocumentIdByContent = async (collection, queryDict) => {
  try {
    let query = collection;
    for (const field in queryDict) {
      query = query.where(field, "==", queryDict[field]);
    }
      
    const querySnapshot = await query.get();
    if (querySnapshot.empty) {
      throw new Error("No document found with the provided content");
    }
    const doc = querySnapshot.docs[0];
    return doc.id;
  } catch (error) {
    console.error("Error retrieving document ID:", error);
    return null;
  }
};
export default getDocumentIdByContent;
