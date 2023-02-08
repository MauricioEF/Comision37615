import UserRepository from "./repositories/UserRepository.js";
import ArtworkRepository from "./repositories/ArtworkRepository.js";
import GalleryRepository from "./repositories/GalleryRepository.js";
import config from '../config/config.js';

import Dao from "../dao/dao.js";

const dao = new Dao(config);

export const userService = new UserRepository(dao);
export const artworkService = new ArtworkRepository(dao);
export const galleryService = new GalleryRepository(dao);