var socket = io();
function Clicked(){
    var user={
    username : document.getElementById('username').value,
    password : document.getElementById('password').value,
    firstname: document.getElementById('firstname').value,
    lastname: document.getElementById('lastname').value
    };
    socket.emit('user',user);
   
}
if(localStorage.getItem("CurentUser")){
    var users = JSON.parse( localStorage.getItem("CurentUser"));
    socket.emit('user',users);
}
socket.on('DB',function(DB){
        location.replace('/static/home.html');
    
});
socket.on('Teacher',function(Teacher){
    location.replace('/static/teacher.html');
});
socket.on('Parent',function(Parent){
    location.replace('/static/parent.html');
});
