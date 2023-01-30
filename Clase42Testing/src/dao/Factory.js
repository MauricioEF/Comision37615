import config from "../config/config.js"

const PERSISTENCE = config.app.PERSISTENCE
export default class PersistenceFactory {
    static getPersistence = async() =>{
        switch(PERSISTENCE) {
            case "FILESYSTEM":
                const {default:UserDAOFile} = await import('./FileSystem/User.dao.js');
                return {
                    users:new UserDAOFile()
                }
            case "MONGO":
                const {default: UserDAOMongo} = await import('./MongoDB/User.dao.js');
                return {
                    users:new UserDAOMongo
                }
        }
    }
}