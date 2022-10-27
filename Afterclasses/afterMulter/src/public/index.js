const form = document.getElementById('petForm')

form.addEventListener('submit',e=>{
    e.preventDefault();
    let formData = new FormData(form);
    fetch('/api/pets',{
        method:'POST',
        body:formData
    }).then(result=>result.json).then(json=>console.log(json))
})