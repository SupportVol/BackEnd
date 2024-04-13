import { Router } from "express";

/**
 * Represents a base router class.
 * @class
 * @extends Router
 */
class BaseRouter extends Router {
  /**
   * Creates an instance of BaseRouter.
   * @constructor
   */
  constructor() {
    super();
    // Initialize routes
    this.initializeRoutes();
  }

  /**
   * Method to initialize routes.
   */
  initializeRoutes() {
    // Define common routes or middleware here
  }
}

export default BaseRouter;
