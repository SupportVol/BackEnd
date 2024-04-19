// Importing necessary modules
import extractUidAndVerification from '../../middlewares/extractUidAndVerification.js'
import messageInitiateObjects from '../../middlewares/chat/messageInitiateObjects.js'
import { Router } from 'express'
import {
  getAllMessages,
  createMessage,
  deleteMessage
} from '../../handlers/chat/MessageHandlers.js'
const msgRouter = Router()
msgRouter.use(extractUidAndVerification, messageInitiateObjects)

// Define GET route for retrieving all messages
msgRouter.get('/', getAllMessages)

// Define POST route for creating a new message
msgRouter.post('/', createMessage)

// Define DELETE route for deleting a message
msgRouter.delete('/', deleteMessage)
// Exporting the msgRouter class
export default msgRouter
