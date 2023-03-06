import { router } from '../config/router.config.js';
import { authenticate, register, confirmed, forgotPassword, checkToken, sendNewPassword } from '../controllers/user.controller.js';

router.post('/register', register);
router.post('/login', authenticate);
router.get("/confirmed/:token", confirmed)
router.post("/forgot-password", forgotPassword)

router.route("/forgot-password/:token")
    .get(checkToken)
    .post(sendNewPassword)

export default router;
