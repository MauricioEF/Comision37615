const socket = io();


const textBox = document.getElementById('textBox');

textBox.addEventListener('keyup', evt => {
    if (evt.key === "Enter") {
        socket.emit('message', textBox.value);
        textBox.value="";
    }
})

//Socket listeners

socket.on('messageLog', data => {
    let messages = "";
    data.forEach(log=>{
        messages += `${log.socketid} dice: ${log.message} <br/>`
    })
    const logs = document.getElementById('messageLogs');
    logs.innerHTML = messages;
})