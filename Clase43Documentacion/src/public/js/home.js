const logout = () =>{
    fetch('/api/sessions/logout').then(result=>result.json()).then(json=>{
        if(json.status==="success"){
            window.location.replace('/login');
        }else{
            console.log("Algo salió mal");
        }
    })
}