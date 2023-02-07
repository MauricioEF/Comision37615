import { userService, artworkService} from "./services/services.js";

const resolvers = {
    Query: {
        Saludame: () =>{
            return 'Hola Graphql'
        },
        getAllUsers: async() =>{
            const users = await userService.getAll();
            return users;
        },
        getAllArtworks: async() =>{
            const artworks = await artworkService.getAll();
            return artworks;
        }
    },

    Mutation: {
        createArtwork: async(_, params) =>{
            console.log(params)
            const result = await artworkService.save(params);
            return result;
        }
    }
}

export default resolvers;