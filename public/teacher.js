var socket = io();
socket.emit('IsHeTeacher',false);
socket.on('Not',function(data){
    console.log('asd');
    location.replace('/');
});
function Clicked(){
    var username = document.getElementById('searchterm').value;
    console.log(username);
    socket.emit('teacherSarch',username);
    console.log('asdsa');
}
socket.on('visit',function(doc){
    location.replace('/static/teacherstudent.html');
});