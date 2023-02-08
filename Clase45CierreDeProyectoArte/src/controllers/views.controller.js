import { ROUTES } from "../constants/routes.js";
import { artworkService, galleryService } from "../services/services.js";


const home = async(req,res) =>{
    const user = req.user;
    const routes = ROUTES[user.role];
    const artworks = await artworkService.getAll();
    const isAdmin = user.role==="admin";
    res.render('home',{user,routes,artworks,isAdmin});
}


const register = (req,res) =>{
    res.render('register');
}

const login = (req,res) => {
    res.render('login');
}

const passwordRestoreRequest = (req,res) =>{
    res.render('passwordRestoreRequest');
}

const restorePassword = (req,res)=>{
    res.render('restorePassword');
}

const artworkCreator = (req,res) =>{
    res.render('artworkCreator');
}

const artworkDetails = async(req,res)=>{
    const artworkId = req.params.aid;
    const artwork = await artworkService.getBy({_id:artworkId});
    if(!artwork) return res.status(400).send({status:"error",error:"Artwork not found"})
    res.render('artworkDetails',{artwork})
}

const gallery = async(req,res) =>{
    const user = req.user;
    const gallery = await galleryService.getByAndPopulate({_id:user.gallery})
    const artworks = gallery.artworks;
    res.render('gallery',{artworks});
}

export default {
    artworkCreator,
    artworkDetails,
    gallery,
    home,
    login,
    passwordRestoreRequest,
    register,
    restorePassword
}