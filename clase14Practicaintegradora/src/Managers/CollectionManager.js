import fs, { unwatchFile } from 'fs';
import __dirname from '../utils.js';

export default class CollectionManager {

    constructor() {
        this.path = `${__dirname}/files/collections.json`;
        this.init();
    }

    init = async () => {
        if (!fs.existsSync(this.path)) await fs.promises.writeFile(this.path, JSON.stringify([]));
    }

    readFile = async () => {
        const data = await fs.promises.readFile(this.path, 'utf8');
        return JSON.parse(data);
    }

    getCollections = () => {
        return this.readFile();
    }

    getCollectionById = async (id) => {
        const collections = await this.readFile();
        const collection = collections.find(col => col.id === id);
        return collection;
    }

    exists = async (id) => {
        const collections = await this.readFile();
        return collections.some(col => col.id === id);
    }

    addCollection = async () => {
        const collections = await this.readFile();
        const newCollection = {
            id: collections.length === 0 ? 1 : collections[collections.length - 1].id + 1,
            artworks: []
        }
        collections.push(newCollection);
        await fs.promises.writeFile(this.path,JSON.stringify(collections,null,'\t'))
        return newCollection;
    }
    addArtworkToService = async(cid,aid) =>{
        const collections = await this.readFile();
        let updatedCollection;
        const newCollections = collections.map(col=>{
            if(col.id===cid){
                updatedCollection = col;
                col.artworks.push(aid);
            }
            return col;
        })
        await fs.promises.writeFile(this.path,JSON.stringify(newCollections,null,'\t'))
        return updatedCollection;
    }
}