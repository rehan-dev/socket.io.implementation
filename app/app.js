const socket = io('ws://localhost:8080');


socket.on('message', text => {
    if(text=='12'){
        const el = document.createElement('li');
        el.innerHTML = text;
        document.querySelector('ul').appendChild(el)
    }
});


window.onload = function(){ 

document.getElementById('send').onclick = () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text)
}

}