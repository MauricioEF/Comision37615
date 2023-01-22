import { useState,useEffect } from "react";
import SessionsService from "../../services/sessionsService";

const Login = () =>{

    const [input, setInput] = useState({
        email:{
            value:'',
            error:''
        },
        password:{
            value:'',
            error:''
        }
    })

    const handleInputChange = (e) =>{
        setInput(prev=>({
            ...prev,
            [e.target.name]:{
                value:e.target.value,
                error:null
            }
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let error = false;
        Object.keys(input).forEach(key=>{
            if(input[key].value.trim().length===0){
                error=true;
                setInput(prev=>({
                    ...prev,
                    [key]:{
                        ...prev[key],
                        error:'Completa este campo'
                    }
                }))
            }
        })
        if(error) return;

        const service = new SessionsService();

        const sendObject = {
            email:input.email.value,
            password:input.password.value
        }
        service.login({body:sendObject,callbackSuccess:callbackSuccessLogin,callbackError:callbackErrorLogin});
    }

    // useEffect(()=>{
    //     console.log(input);
    // },[input])


    //CALLBACKS
    const callbackSuccessLogin = (res) =>{
        console.log(res);
    }

    const callbackErrorLogin = (error) =>{
        console.log(error);
    }

    return(<>
        <h1>Hola Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input name="email" value={input['email'].value} onChange={handleInputChange}/>
            {input.email.error&&<p style={{color:"red"}}>{input.email.error}</p>}
            <label>Contraseña</label>
            <input type="password" name="password" value={input['password'].value} onChange={handleInputChange}/>
            {input.password.error&&<p style={{color:"red"}}>{input.password.error}</p>}
            <button>Ingresar :)</button>
        </form>
    </>)
}


export default Login;