/**
 * Checks if a variable is an array, if not, adds it to the given array.
 * @param {*} checkVar - The variable to check.
 * @param {Array} init - The array to add the variable to if it's not an array.
 * @returns {Array} - The initialized array or the original array with the added variable.
 */
const isArray = (checkVar, init) => {
  if (typeof checkVar === "object") {
    return checkVar;
  } else if (!isNaN(checkVar)) {
    init.push(checkVar);
    return init;
  } else {
    return init;
  }
};

export default isArray;
