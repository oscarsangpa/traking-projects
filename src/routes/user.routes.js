import { router } from '../config/router.config.js';
import { authenticate, register } from '../controllers/user.controller.js';

router.post('/register', register);
router.post('/login', authenticate);

export default router;
