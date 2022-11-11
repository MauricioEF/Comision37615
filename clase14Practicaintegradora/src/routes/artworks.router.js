import { Router } from 'express';
import ArtworkManager from '../Managers/ArtworkManager.js';

const router = Router();
const artworkService = new ArtworkManager();

router.get('/', async (req, res) => {
    let artworks = await artworkService.getArtworks();
    res.send({ status: "success", payload: artworks });
})

router.get('/:aid', async (req, res) => {
    const { aid } = req.params;
    const id = parseInt(aid);

    let artwork = await artworkService.getArtworkById(id);
    res.send({ status: "success", payload: artwork });
})

router.post('/',async(req,res)=>{
    const {title,author,price,copies} = req.body;
    if(!title||!author||!price||!copies) return res.status(400).send({status:"error",error:"Incomplete values"})
    const artworkToInsert = {
        title,
        author,
        price,
        copies
    }
    await artworkService.addArtwork(artworkToInsert);
    res.send({status:"success",message:"Artwork added"})
})

export default router;