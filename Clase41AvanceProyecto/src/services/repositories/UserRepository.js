import User from "../../dao/MongoDB/models/User.model.js";
import GenericRepository from "./GenericRepository.js";


export default class UserRepository extends GenericRepository {
    constructor(dao) {
        super(dao,User.model)
    }
}