const form = document.getElementById('restoreForm');
const params = new Proxy(new URLSearchParams(window.location.search),{
    get: (searchParams,prop) => searchParams.get(prop)
})

form.addEventListener('submit',evt=>{
    evt.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value,key)=>obj[key]=value);
    obj.token=params.token;
    fetch('/api/sessions/restorePassword',{
        method:'POST',
        body: JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(result=>result.json()).then(json=>{
        console.log(json);
    });
})