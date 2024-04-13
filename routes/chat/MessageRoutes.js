// Importing necessary modules
import extractUidAndVerification from "../../middlewares/extractUidAndVerification.js";
import messageInitiateObjects from "../../middlewares/chat/messageInitiateObjects.js";
import BaseRouter from "../../utils/routing/BaseRouter.js";

// msgRouter class extends BaseRouter
class msgRouter extends BaseRouter {
  // Method to initialize routes
  initializeRoutes() {
    // Use middleware for extracting UID and verification, and initiating message objects
    this.use(extractUidAndVerification, messageInitiateObjects);

    // Define GET route for retrieving all messages
    this.get("/", getAllMessages);

    // Define POST route for creating a new message
    this.post("/", createMessage);

    // Define DELETE route for deleting a message
    this.delete("/", deleteMessage);
  }
}

// Exporting the msgRouter class
export default msgRouter;
