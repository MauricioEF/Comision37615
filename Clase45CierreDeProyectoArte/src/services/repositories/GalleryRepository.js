import Gallery from "../../dao/MongoDB/models/Gallery.model.js";
import GenericRepository from "./GenericRepository.js";


export default class GalleryRepository extends GenericRepository {
    constructor(dao) {
        super(dao, Gallery.model);
    }
    getByAndPopulate = (params) =>{
        return this.dao.getByAndPopulate(params,{
            //Path hace referencia a la PROPIEDAD que quiero popular
            path:'artworks',
            populate:{
                path:'artwork',
                options:{lean:true}
            }
        },Gallery.model)
    }
}