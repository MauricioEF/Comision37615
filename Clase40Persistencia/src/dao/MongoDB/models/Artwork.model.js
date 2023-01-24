
export default class Artwork {

    static get model() {
        return 'Artworks';
    }

    static get schema() {
        return {
            title:String,
            author:String,
            price:Number,
            copies:Number,
            creationDate:Date,
            movement:String,
            genre: String
        }
    }
}