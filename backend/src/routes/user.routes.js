import express from 'express'
import {
    authenticate,
    register,
    confirmed,
    forgotPassword,
    checkToken,
    sendNewPassword,
    profile
} from '../controllers/user.controller.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router()

router.post('/register', register);
router.post('/login', authenticate);
router.get("/confirmed/:token", confirmed)
router.post("/forgot-password", forgotPassword)

router.route("/forgot-password/:token")
    .get(checkToken)
    .post(sendNewPassword)


router.get('/profile', checkAuth, profile)

export {
    router as userRouter
}
