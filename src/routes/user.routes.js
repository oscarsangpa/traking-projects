import { router } from "../config/router.config.js"
import { register } from '../controllers/user.controller.js'

router.post("/register", register)

export default router