/**
 * Checks if a variable is an array, if not, adds it to the given array.
 * @param {*} checkVar - The variable to check.
 * @param {Array} init - The array to add the variable to if it's not an array.
 * @returns {Array} - The initialized array or the original array with the added variable.
 */
const isArray = (checkVar, init) => {
  // Check if checkVar is an array
  if (Array.isArray(checkVar)) {
    // If it is, return the original array
    return checkVar;
  } else {
    // If it's not, add it to the array and return the modified array
    init.push(checkVar);
    return init;
  }
};

export default isArray;
