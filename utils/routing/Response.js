/**
 * Utility class for handling HTTP responses.
 */
export default class Response {
  /**
   * Initialize the Response object.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  /**
   * Send an HTTP response.
   * @param {Object} options - Response options.
   * @param {boolean} options.successful - Indicates if the operation was successful.
   * @param {boolean} options.messageAdd - Indicates if a message should be included in the response.
   * @param {string} options.message - The message to include in the response.
   * @param {boolean} options.jsonAdd - Indicates if JSON data should be included in the response.
   * @param {Object} options.json - The JSON data to include in the response.
   * @param {number} options.code - The HTTP status code for the response.
   * @returns {Object} The HTTP response object.
   */
  response({
    successful = true,
    messageAdd = false,
    message = "Default Message",
    jsonAdd = false,
    json = {},
    code = NaN,
  }) {
    const statusCode = code || (successful ? 200 : 401);
    let respondCombination = this.res.status(statusCode);
    if (messageAdd) {
      respondCombination = respondCombination.send(message);
    }
    if (jsonAdd) {
      respondCombination = respondCombination.json(json);
    }
    return respondCombination;
  }

  /**
   * Handle error response structure.
   * @param {Error|string} error - The error object or message.
   * @returns {Object} The error response structure.
   */
  errorStructure(error) {
    return {
      // ...this.req.resStructure,
      successful: false,
      messageAdd: true,
      message: error.message || error,
    };
  }

  /**
   * Send a response with status.
   * @param {Function} action - The action to perform.
   * @param {Array} [parameters=[]] - The parameters for the action.
   * @returns {Object} The HTTP response object.
   */
  respondStatus(action, parameters = []) {
    try {
      console.log(this.actionResponse(action, parameters));
      this.req.resStructure = {
        // ...this.req.resStructure,
        successful: true,
      };
    } catch (error) {
      this.req.resStructure = this.errorStructure(error);
    }
    return this.response(this.req.resStructure);
  }

  /**
   * Send a JSON response.
   * @param {Function} action - The action to perform.
   * @param {Array} [parameters=[]] - The parameters for the action.
   * @returns {Object} The HTTP response object.
   */
  respondJSON(action, parameters = []) {
    try {
      console.log(this.actionResponse(action, parameters));
      this.req.resStructure = {
        // ...this.req.resStructure,
        // ...this.actionResponse(action, parameters),
        jsonAdd: true,
      };
    } catch (error) {
      console.log(error);
      this.req.resStructure = this.errorStructure(error);
    }
    return this.response(this.req.resStructure);
  }

  /**
   * Send a JSON response with a message.
   * @param {Function} action - The action to perform.
   * @param {string} message - The message to include in the response.
   * @param {Array} [parameters=[]] - The parameters for the action.
   * @returns {Object} The HTTP response object.
   */
  respondJSONandMessage(action, message, parameters = []) {
    try {
      console.log(this.actionResponse(action, parameters));
      this.req.resStructure = {
        // ...this.req.resStructure,
        // ...this.actionResponse(action, parameters),
        messageAdd: true,
        message: message,
      };
    } catch (error) {
      this.req.resStructure = this.errorStructure(error);
    }
    return this.response(this.req.resStructure);
  }

  /**
   * Perform an action and return the response.
   * @param {Function} action - The action to perform.
   * @param {Array} [parameters=[]] - The parameters for the action.
   * @param {boolean} [containJSON=true] - Indicates if the response should contain JSON data.
   * @returns {Object} The response object.
   */
  actionResponse(action, parameters = [], containJSON = true) {
    const [successful, response] = action(...parameters);
    return {
      successful: successful,
      json: containJSON ? { response: response } : NaN,
    };
  }
}
