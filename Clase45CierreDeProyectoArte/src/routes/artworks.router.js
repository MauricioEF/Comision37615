import { Router } from "express";
import artworksController from "../controllers/artworks.controller.js";
import { executePolicies, privateValidation } from "../middlewares/auth.middleware.js";
import uploader from "../services/uploader.js";

const router = Router();


router.post('/',uploader.single('image'), artworksController.createArtwork);
router.post('/:aid',privateValidation,executePolicies(['USER']), artworksController.addArtwork)

export default router;