import { router } from '../config/router.config.js';
import { authenticate, register, confirmed, forgotPassword, checkToken } from '../controllers/user.controller.js';

router.post('/register', register);
router.post('/login', authenticate);
router.get("/confirmed/:token", confirmed)
router.post("/forgot-password", forgotPassword)
router.get("/forgot-password/:token", checkToken)

export default router;
