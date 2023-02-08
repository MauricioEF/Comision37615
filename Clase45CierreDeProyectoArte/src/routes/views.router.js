import { Router } from "express";
import viewsController from "../controllers/views.controller.js";
import { executePolicies, privateValidation } from "../middlewares/auth.middleware.js";

const router = Router();


router.get('/',privateValidation,viewsController.home);
router.get('/register',viewsController.register)
router.get('/login', viewsController.login)
router.get('/passwordRestoreRequest',viewsController.passwordRestoreRequest);
router.get('/restorePassword',viewsController.restorePassword);
router.get('/artworkcreator',privateValidation,executePolicies(['ADMIN']),viewsController.artworkCreator);
router.get('/artworks/:aid',privateValidation,viewsController.artworkDetails)
router.get('/gallery',privateValidation,executePolicies(['USER']),viewsController.gallery)

export default router;