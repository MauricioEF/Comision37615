import config from "../config/config.js";
import ArtworkDTO from "../dao/DTO/Artwork.dto.js";
import { artworkService } from "../services/services.js";


const createArtwork = async(req,res) =>{
    if(!req.file) return res.status(500).send({status:"error",error:"Couldn't upload file"});
    console.log(req.body);
    const {title,author,price, copies, movement, creationDate} = req.body;
    if(!title||!price||!copies) return res.status(400).send({status:"error",error:"Incomplete values"});
    const artwork = ArtworkDTO.getDbDTOFrom({title,author,price,copies,movement,creationDate,
        image: `${req.protocol}://${req.host}:${config.app.PORT}/images/${req.file.filename}`
    });
    let result = await artworkService.save(artwork);
    res.send({status:"success",payload:result})
}

export default {
    createArtwork
}