import Cart from "../../dao/MongoDB/models/Cart.model.js";
import GenericRepository from "./GenericRepository.js";


export default class CartRepository extends GenericRepository {
    constructor(dao) {
        super(dao, Cart.model);
    }
}