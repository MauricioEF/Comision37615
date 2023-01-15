
const register = (req,res)=>{
    res.render('register');
}

const login = (req,res)=>{
    res.render('login');
}

export default {
    login,
    register
}