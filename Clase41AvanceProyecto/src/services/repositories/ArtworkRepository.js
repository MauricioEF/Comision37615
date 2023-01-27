import Artwork from "../../dao/MongoDB/models/Artwork.model.js";
import GenericRepository from "./GenericRepository.js";

export default class ArtworkRepository extends GenericRepository {
    constructor(dao){
        super(dao, Artwork.model)
    }
}