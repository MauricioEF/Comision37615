import UserRepository from "./repositories/UserRepository.js";
import ArtworkRepository from "./repositories/ArtworkRepository.js";
import CartRepository from "./repositories/CartRepository.js";

import Dao from "../dao/dao.js";

const dao = new Dao();

export const userService = new UserRepository(dao);
export const artworkService = new ArtworkRepository(dao);
export const cartService = new CartRepository(dao);