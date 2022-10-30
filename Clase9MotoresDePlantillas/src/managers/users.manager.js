import fs from 'fs';
import __dirname from '../utils.js';

const path = __dirname+'/files/users.json';

export default class UsersManager {
    constructor(){
        if(!fs.existsSync(path)){
            this.init();
        }
    }
    init = async() =>{
        await fs.promises.writeFile(path,JSON.stringify([]))
    }
    getUsers = async() =>{
        const data = await fs.promises.readFile(path,'utf8');
        const users = JSON.parse(data);
        return users;
    }
    saveUser = async (user) =>{
        const users = await this.getUsers();
        users.push(user);
        await fs.promises.writeFile(path,JSON.stringify(users,null,'\t'))
        return user;
    }
}