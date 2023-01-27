export default class User {

    static get model() {
        return 'Users';
    }

    static get schema() {
        return {
            first_name:String,
            last_name:String,
            email:String,
            password:String,
            role:{
                type:String,
                default:'user'
            },
            username:String
        }
    }

}