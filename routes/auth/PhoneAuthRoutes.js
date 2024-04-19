import { Router } from 'express'
import phoneAuthInitiateObjects from '../../middlewares/auth/phoneAuthInitiateObjects.js'
import {
  handleCreatePhoneVerification,
  handlePhoneValidation
} from '../../handlers/auth/phoneNumberAuthHandlers.js'

const phoneAuthRouter = Router()
phoneAuthRouter.use(phoneAuthInitiateObjects)

phoneAuthRouter.get('/phone', handleCreatePhoneVerification)
phoneAuthRouter.get('/phone/valid', handlePhoneValidation)

export default phoneAuthRouter
