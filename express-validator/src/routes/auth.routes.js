import express from 'express'
import { register } from '../controllers/auth.controller.js'
import { registerValidation } from '../validators/auth.validator.js'
const router = express.Router()

/**
 *  POST - /api/auth/register
 */

router.post("/register", registerValidation,register)


export default router