
export default class UserDTO {
    
    static getDbDTOFrom = (user) =>{
        return {
            first_name : user.first_name,
            last_name : user.last_name,
            password : user.password,
            email : user.email,
            username: user.username || 'user',
            gallery:user.gallery
        }
    }

    static getPresenterFrom = (user) =>{
        return {
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            role: user.role,
            fullName: `${user.first_name} ${user.last_name}`
        }
    }

    static getTokenFrom = (user) =>{
        return  {
            id: user._id||'0',
            role:user.role,
            name: user.first_name?`${user.first_name} ${user.last_name}`:'Admin',
            gallery:user.gallery
        }
    }
}