var socket = io();
var info = document.getElementById('info');
var table = document.getElementById('information');
var ocenka = false;
var user21 = {};
socket.on('parentinfo',function(doc){
     user21 = doc;
     info.innerHTML = "Име: "+doc.firstname+" Фамилия: "+doc.lastname;
    socket.emit('infooocenka',doc);
});
var getName = false;
socket.on('info',function(user){
 

    if(!getName){
    //console.log('asd');
        getName = true;
    }
});
socket.on('infoocenka',function(docs){
   
    if(!ocenka){
    for(var i=0;i<docs.length;i++){
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
        ocenka=true;
        

        

        
    }
    }
});
function Click(){
    socket.emit('Upload',user21);
    location.reload();
}