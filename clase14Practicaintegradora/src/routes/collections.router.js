import { Router } from 'express';
import CollectionManager from '../Managers/CollectionManager.js';
import ArtworkManager from '../Managers/ArtworkManager.js';

const router = Router();
const collectionsService = new CollectionManager();
const artworksService = new ArtworkManager();

router.get('/',async(req,res)=>{
    const collections = await collectionsService.getCollections();
    res.send({status:"success",payload:collections})
})

router.get('/:cid',async(req,res)=>{
    const {cid} = req.params;
    const id = parseInt(cid);
    const collection = await collectionsService.getCollectionById(id);
    res.send({status:"success",payload:collection})
})

router.post('/',async(req,res)=>{
    const newCollection = await collectionsService.addCollection();
    res.send({status:"success",payload:newCollection})
})

router.post('/:cid/artworks/:aid',async(req,res)=>{
    const {cid,aid} = req.params;
    const collectionId = parseInt(cid);
    const artworkId = parseInt(aid);
    
    const existsCollection = await collectionsService.exists(collectionId);
    const existsArtwork = await artworksService.exists(artworkId);
    if(!existsCollection) return res.status(404).send({status:"error",error:"Collection not found"})
    if(!existsArtwork) return res.status(404).send({status:"error",error:"Artwork not found"})
    
    const result = await collectionsService.addArtworkToService(collectionId,artworkId);
    res.send({status:"success",payload:result})
})

export default router;