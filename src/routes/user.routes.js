import { router } from '../config/router.config.js';
import { authenticate, register, confirmed } from '../controllers/user.controller.js';

router.post('/register', register);
router.post('/login', authenticate);
router.get("/confirmed/:token", confirmed)

export default router;
