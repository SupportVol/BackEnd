import isArray from "../validation/isArray.js";

const updateData = (fields, data, alreadyData) => {
  const updateStructure = {};
  fields.forEach((field, index) => {
    console.log(field,index)
    if (Array.isArray(alreadyData[field])) {
      updateStructure[field] = isArray(data[index], alreadyData[field]);
    }
    updateStructure[field] = data[index] ?? alreadyData[field];
    console.log(updateStructure[field])
  });
  return updateStructure;
};
export default updateData;
