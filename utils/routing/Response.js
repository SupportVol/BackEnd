export default class Response {
  constructor (req, res) {
    this.req = req
    this.res = res
    this.resStructure = {
      successful: true,
      messageAdd: false,
      jsonAdd: false
    }
  }

  response (options) {
    const {
      successful = true,
      messageAdd = false,
      message = 'Default Message',
      jsonAdd = false,
      json = {},
      code = NaN
    } = options

    const statusCode = code || (successful ? 200 : 401)
    let respondCombination = this.res.status(statusCode)

    if (messageAdd) {
      respondCombination = respondCombination.send(message)
    }
    if (jsonAdd) {
      respondCombination = respondCombination.json(json)
    }

    return respondCombination
  }

  errorStructure (error) {
    return {
      ...this.resStructure,
      successful: false,
      messageAdd: true,
      message: error.message || error
    }
  }

  async respondStatus (code) {
    try {
      this.resStructure.successful = true
      this.resStructure.code = code
    } catch (error) {
      this.resStructure = this.errorStructure(error)
    }
    return this.response(this.resStructure)
  }

  async respondJSON (actionResponse) {
    try {
      this.resStructure = {
        ...this.resStructure,
        ...actionResponse,
        jsonAdd: true
      }
    } catch (error) {
      console.error('Error in respondJSON:', error)
      this.resStructure = this.errorStructure(error)
    }
    return this.response(this.resStructure)
  }

  async respondJSONandMessage (actionResponse, message) {
    try {
      this.resStructure = {
        ...this.resStructure,
        ...actionResponse,
        messageAdd: true,
        message
      }
    } catch (error) {
      this.resStructure = this.errorStructure(error)
    }
    return this.response(this.resStructure)
  }

  // async actionResponse(action, parameters = [], containJSON = true) {
  //   try {
  //     const response =
  //       parameters.length > 0 ? await action(...parameters) : await action();
  //     if (Array.isArray(response) && response.length >= 2) {
  //       return {
  //         successful: response[0],
  //         json: containJSON
  //           ? { response: response[1] }
  //           : { message: response[1] },
  //       };
  //     } else {
  //       throw new Error("Invalid response format");
  //     }
  //   } catch (error) {
  //     console.error("Error in actionResponse:", error);
  //     return { successful: false, json: { error: "Error occurred" } };
  //   }
  // }
}
