// Importing necessary modules
import newsInitiateObjects from "../../middlewares/admin/newsInitiateObjects.js";
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import BaseRouter from "../../utils/routing/BaseRouter.js";

/**
 * NewsRouter class extends BaseRouter.
 * It initializes routes for news related operations.
 */
class NewsRouter extends BaseRouter {
  /**
   * This method initializes all the routes.
   * It uses middlewares for extracting user id and verification, and initiating news objects.
   * It defines routes for getting, creating, updating and deleting news.
   */
  initializeRoutes() {
    // Use middleware to extract user id and verification
    this.use(extractUidAndVerification);

    // Use middleware to initiate news objects
    this.use(newsInitiateObjects);

    // Define route for getting news
    this.get("/", getNews);

    // Define route for creating news
    this.post("/", createNews);

    // Define route for updating news
    this.put("/", updateNews);

    // Define route for deleting news
    this.delete("/", deleteNews);
  }
}

// Export NewsRouter class
export default NewsRouter;
