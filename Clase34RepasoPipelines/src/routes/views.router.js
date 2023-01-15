import { Router } from 'express';
import viewsController from '../controllers/views.controller.js';

const router = Router();

router.get('/',viewsController.register);
router.get('/login',viewsController.login);

export default router;