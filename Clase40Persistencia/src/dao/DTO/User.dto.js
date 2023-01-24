
export default class UserDTO {
    
    static getDbDTOFrom = (user) =>{
        return {
            first_name : user.first_name,
            last_name : user.last_name,
            password : user.password,
            email : user.email,
            username: user.username || 'user'
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

}