const register = (req,res) =>{
    res.render('register');
}

const login = (req,res) => {
    res.render('login');
}

const passwordRestoreRequest = (req,res) =>{
    res.render('passwordRestoreRequest');
}

const restorePassword = (req,res)=>{
    res.render('restorePassword');
}

export default {
    login,
    passwordRestoreRequest,
    register,
    restorePassword
}