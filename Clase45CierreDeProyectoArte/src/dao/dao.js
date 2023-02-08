import mongoose from "mongoose";
import User from "./MongoDB/models/User.model.js";
import Artwork from "./MongoDB/models/Artwork.model.js";
import Gallery from "./MongoDB/models/Gallery.model.js";

export default class Dao {
    constructor(config) {
        mongoose.set('strictQuery', true);
        this.connection = mongoose.connect(config.mongo.URL)
        const genericTimeStamps = {timestamps:{createdAt:'created_at',updatedAt:'updated_at'}};

        const userSchema = mongoose.Schema(User.schema,genericTimeStamps);
        const artworkSchema = mongoose.Schema(Artwork.schema,genericTimeStamps);
        const gallerySchema = mongoose.Schema(Gallery.schema,genericTimeStamps);

        this.models = {
            [User.model] : mongoose.model(User.model,userSchema),
            [Artwork.model] : mongoose.model(Artwork.model,artworkSchema),
            [Gallery.model] : mongoose.model(Gallery.model,gallerySchema)
        }
    }

    get = (options, entity) =>{
        if(!this.models[entity]) throw new Error(`Entity ${entity} not defined in models`);
        return this.models[entity].find(options).lean();
    }

    getBy = (options,entity) =>{
        if(!this.models[entity]) throw new Error(`Entity ${entity} not defined in models`);
        return this.models[entity].findOne(options).lean();
    }

    getByAndPopulate = (params,populationQuery,entity) =>{
        if(!this.models[entity]) throw new Error(`Entity ${entity} not defined in models`);
        return this.models[entity].findOne(params).populate(populationQuery).lean();
    }

    save = (document, entity) =>{
        if(!this.models[entity]) throw new Error(`Entity ${entity} not defined in models`);
        return this.models[entity].create(document);
    }

    update = (id,document,entity) =>{
        if(!this.models[entity]) throw new Error(`Entity ${entity} not defined in models`);
        return this.models[entity].findByIdAndUpdate(id,{$set:document});
    }


    drop = (entity) =>{
        if(!this.models[entity]) throw new Error(`Entity ${entity} not defined in models`);
        return this.models[entity].collection.drop();
    }
    
}