import { Router } from 'express';
import PetsManager from '../Managers/petManager.js';
import uploader from '../services/upload.js';

const router = Router();
const petsService = new PetsManager();
router.post('/',uploader.single('image'),async (req,res)=>{
    console.log(req.file);
    const image = req.protocol+"://"+req.hostname+':8080/images/'+req.file.filename;
    //http://localhost
    let pet = req.body; //¿Desde aquí ya llega la imagen?
    pet.image = image;
    const result = await petsService.add(pet);
    res.send({status:"success",message:"Pet added"});
})

router.get('/',async(req,res)=>{
    let result = await petsService.get();
    res.send(result);
})
export default router;