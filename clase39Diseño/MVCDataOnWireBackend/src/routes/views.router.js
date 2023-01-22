import { Router } from "express";
import viewsController from "../controllers/views.controller.js";

const router = Router();

router.get('/register',viewsController.register)
router.get('/login', viewsController.login)
router.get('/passwordRestoreRequest',viewsController.passwordRestoreRequest);
router.get('/restorePassword',viewsController.restorePassword);

export default router;