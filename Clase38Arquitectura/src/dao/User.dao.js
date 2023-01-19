import userModel from "./models/User.model.js";

export default class UserDAO {
    
    getUsers = () =>{
        return userModel.find();
    }

    getUserBy = (params) =>{
        return userModel.findOne(params);
    }

    saveUser = (user) =>{
        return userModel.create(user);
    }

}