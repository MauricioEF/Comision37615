

const home = (req,res) =>{
    res.render('home');
}


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

const artworkCreator = (req,res) =>{
    res.render('artworkCreator');
}


export default {
    artworkCreator,
    home,
    login,
    passwordRestoreRequest,
    register,
    restorePassword
}