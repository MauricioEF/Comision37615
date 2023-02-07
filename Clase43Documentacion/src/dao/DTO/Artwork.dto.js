
export default class ArtworkDTO {
    static getDbDTOFrom = (artwork) => {
        return {
            title:artwork.title,
            author:artwork.author||'anonymous',
            price:artwork.price,
            copies:artwork.copies,
            movement: artwork.movement || 'unknown',
            creationDate: artwork.creationDate || 'unknown',
            image: artwork.image
        }
    }
}