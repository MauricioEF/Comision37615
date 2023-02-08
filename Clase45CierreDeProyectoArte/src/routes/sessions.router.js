import { Router } from 'express';
import sessionsController from '../controllers/sessions.controller.js';

const router = Router();

router.get('/logout',sessionsController.logout);

router.post('/register',sessionsController.register);
router.post('/login',sessionsController.login);
router.post('/passwordRestoreRequest',sessionsController.passwordRestoreRequest)
router.post('/restorePassword',sessionsController.restorePassword);

export default router;