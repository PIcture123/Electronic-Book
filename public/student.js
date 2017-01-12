var socket = io();
var info = document.getElementById('info');
var table = document.getElementById('information');
var ocenka = false;
var users = {};
function Click(){
    console.log('ddddd');
    localStorage.removeItem("CurentUser");
    location.replace('/');
}

var getName = false;
socket.on('info',function(user){
    
    if(localStorage.getItem("CurentUser")){  
        
         users = JSON.parse( localStorage.getItem("CurentUser"));
    info.innerHTML = "Име: "+users.firstname+" Фамилия: "+users.lastname;
     socket.emit('UserInfo',users); 
    }else{
        users = user;
     localStorage.setItem("CurentUser",JSON.stringify(user));
    socket.emit('UserInfo',user);
    //console.log('asd');
    info.innerHTML = "Име: "+user.firstname+" Фамилия: "+user.lastname;
        getName = true;
     
    }
});
var Isitin = false;
socket.on('infoOcenka',function(docs){
    if(docs[0].username == users.username){
    for(var i=0;i<docs.length;i++){
     if(document.getElementById('myTr'+i)){
         console.log('You all ready have TR');
    }else{
        var tr = document.createElement("TR");
        tr.setAttribute("id","myTr"+i);
        table.appendChild(tr);
    
        var tddata = document.createElement("TH");
        var text = document.createTextNode(docs[i].data);
        tddata.appendChild(text);
        document.getElementById('myTr'+i).appendChild(tddata);
        
        var tdsubject = document.createElement("TH");
        var text = document.createTextNode(docs[i].subjet);
        tdsubject.appendChild(text);
        document.getElementById('myTr'+i).appendChild(tdsubject);
        
        var tdclasses = document.createElement("TH");
        var text = document.createTextNode(docs[i].classes);
        tdclasses.appendChild(text);
        document.getElementById('myTr'+i).appendChild(tdclasses);

        var tdhomework = document.createElement("TH");
        var text = document.createTextNode(docs[i].homework);
        tdhomework.appendChild(text);
        document.getElementById('myTr'+i).appendChild(tdhomework);

        var tdthereornot = document.createElement("TH");
        var text = document.createTextNode(docs[i].thereornot);
        tdthereornot.appendChild(text);
        document.getElementById('myTr'+i).appendChild(tdthereornot);

        var tdtests = document.createElement("TH");
        var text = document.createTextNode(docs[i].tests);
        tdtests.appendChild(text);
        document.getElementById('myTr'+i).appendChild(tdtests);

        var tdseefromparent = document.createElement("TH");
        var text = document.createTextNode(docs[i].seefromparent);
        tdseefromparent.appendChild(text);
        document.getElementById('myTr'+i).appendChild(tdseefromparent);
        
        
    
     }    
    
    
    
    }
    }

});