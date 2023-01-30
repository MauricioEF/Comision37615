import Dao from '../src/dao/dao.js';
import UserRepository from '../src/services/repositories/UserRepository.js';
import { strict as assert} from 'assert';
const config = {
    mongo:{
        URL:"mongodb+srv://CoderUser:123@codercluster.w5adegs.mongodb.net/testing?retryWrites=true&w=majority"
    }
}

const dao = new Dao(config);
const userService = new UserRepository(dao);

describe('Testing de UserRepository',()=>{
    it('El Repositorio debe poder crear un usuario a partir de su DAO',async function(){
        const result = await userService.save({
            first_name:"Eduardo",
            last_name:"Esequiel",
            email:"correoeduardo@correo.com",
            password:"123"
        })
        assert.ok(result._id)
    })
    it('El repositorio debe poder obtener a los usuarios en formato de array', async function(){
        const result = await userService.getAll();
        assert.equal(Array.isArray(result),true);
    })
    it('El Respositorio debe poder obtener UN usuario a partir de un parámetro: email',async function(){
        const result = await userService.getBy({email:'correoeduardo@correo.com'})
        assert.ok(result._id);
    })
})