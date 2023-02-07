import mongoose from "mongoose";
import User from "./MongoDB/models/User.model.js";
import Artwork from "./MongoDB/models/Artwork.model.js";
import Cart from "./MongoDB/models/Cart.model.js";

export default class Dao {
    constructor(config) {
        this.connection = mongoose.connect(config.mongo.URL)
        const genericTimeStamps = {timestamps:{createdAt:'created_at',updatedAt:'updated_at'}};

        const userSchema = mongoose.Schema(User.schema,genericTimeStamps);
        const artworkSchema = mongoose.Schema(Artwork.schema,genericTimeStamps);
        const cartSchema = mongoose.Schema(Cart.schema,genericTimeStamps);

        this.models = {
            [User.model] : mongoose.model(User.model,userSchema),
            [Artwork.model] : mongoose.model(Artwork.model,artworkSchema),
            [Cart.model] : mongoose.model(Cart.model,cartSchema)
        }
    }

    get = (options, entity) =>{
        if(!this.models[entity]) throw new Error(`Entity ${entity} not defined in models`);
        return this.models[entity].find(options);
    }

    getBy = (options,entity) =>{
        if(!this.models[entity]) throw new Error(`Entity ${entity} not defined in models`);
        return this.models[entity].findOne(options);
    }

    save = (document, entity) =>{
        if(!this.models[entity]) throw new Error(`Entity ${entity} not defined in models`);
        return this.models[entity].create(document);
    }

    drop = (entity) =>{
        if(!this.models[entity]) throw new Error(`Entity ${entity} not defined in models`);
        return this.models[entity].collection.drop();
    }
    
}