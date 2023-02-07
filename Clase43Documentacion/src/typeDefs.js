
const typeDefs = `#graphql

    type User {
        _id: ID
        first_name: String
        last_name: String
        email: String
        password: String
        role: String
        username: String
    }

    type Artwork {
        _id: ID
        title: String
        author: String
        price: Float
        creationDate: String
        copies: Int
        image: String
    }

    type Query {
        Saludame: String
        getAllUsers: [User]
        getAllArtworks: [Artwork]
    }

    type Mutation {
        createArtwork(title:String, author: String, price: Float, copies: Int, movement: String, creationDate:String) : Artwork
    }
`

export default typeDefs;