var socket = io();
var info = document.getElementById('info');
var table = document.getElementById('information');
var ocenka = false;
var ocenka2 = false;
var br = 2;
socket.on('infoOcenka',function(docs){
    console.log(ocenka);
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
                
                ocenka = true;
                br++;
            }
        if(!ocenka2){
       ocenka2 = true;
        
            var tr = document.createElement("TR");
            tr.setAttribute("class","tr");
            table.appendChild(tr);
        
        var tddatainput = document.createElement("input");
        tddatainput.setAttribute("id","data1");
        var thdata = document.createElement('TH');
        thdata.appendChild(tddatainput);
        tr.appendChild(thdata);
        
        var thsubject = document.createElement('TH');
        var tdsubjectinput = document.createElement("input");
        tdsubjectinput.setAttribute("id","subject");
        thsubject.appendChild(tdsubjectinput);
       tr.appendChild(thsubject);
        
        var thclasses = document.createElement('TH');
        var tdclassesinput = document.createElement("input");
        tdclassesinput.setAttribute("id","classes");
        thclasses.appendChild(tdclassesinput);
        tr.appendChild(thclasses);

        var thhomework = document.createElement("TH");
        var tdhomeworkinput = document.createElement("input");
        tdhomeworkinput.setAttribute("id","homework");
        thhomework.appendChild(tdhomeworkinput);
       tr.appendChild(thhomework);

      
        var ththereornot = document.createElement("TH");  
        var tdthereornotinput = document.createElement("input");
        tdthereornotinput.setAttribute("id","thereornot");
        ththereornot.appendChild(tdthereornotinput);
       tr.appendChild(ththereornot);

        var thtests = document.createElement("TH");
        var tdtestsinput = document.createElement("input");
        tdtestsinput.setAttribute("id","tests");
        thtests.appendChild(tdtestsinput);
       tr.appendChild(thtests);

        var thseefromparent = document.createElement("TH");
        var texts = document.createTextNode("не");
        
        thseefromparent.appendChild(texts);
        
       tr.appendChild(thseefromparent);
       }
    }
});
socket.on('NOT',function(docs){
 var tr = document.createElement("TR");
            tr.setAttribute("class","tr");
            table.appendChild(tr);
            
        var tddatainput = document.createElement("input");
        tddatainput.setAttribute("id","data1");
        var thdata = document.createElement('TH');
        thdata.appendChild(tddatainput);
        tr.appendChild(thdata);
        
        var thsubject = document.createElement('TH');
        var tdsubjectinput = document.createElement("input");
        tdsubjectinput.setAttribute("id","subject");
        thsubject.appendChild(tdsubjectinput);
       tr.appendChild(thsubject);
        
        var thclasses = document.createElement('TH');
        var tdclassesinput = document.createElement("input");
        tdclassesinput.setAttribute("id","classes");
        thclasses.appendChild(tdclassesinput);
        tr.appendChild(thclasses);

        var thhomework = document.createElement("TH");
        var tdhomeworkinput = document.createElement("input");
        tdhomeworkinput.setAttribute("id","homework");
        thhomework.appendChild(tdhomeworkinput);
       tr.appendChild(thhomework);

      
        var ththereornot = document.createElement("TH");  
        var tdthereornotinput = document.createElement("input");
        tdthereornotinput.setAttribute("id","thereornot");
        ththereornot.appendChild(tdthereornotinput);
       tr.appendChild(ththereornot);

        var thtests = document.createElement("TH");
        var tdtestsinput = document.createElement("input");
        tdtestsinput.setAttribute("id","tests");
        thtests.appendChild(tdtestsinput);
       tr.appendChild(thtests);

        var thseefromparent = document.createElement("TH");
        var texts = document.createTextNode("не");
        
        thseefromparent.appendChild(texts);
        
       tr.appendChild(thseefromparent);
});
var isItKeep = false;
var users={};
socket.on('info',function(user){
    console.log('asdasd');
    if(!isItKeep){
        users = user;
        socket.emit('UserInfo',user);
        info.innerHTML = "Име: "+user.firstname+" Фамилия: "+user.lastname;
        isItKeep = true;    
    }
});
//data;subject;classes;homework;thereornot;tests;no
function Clicked(){
        var info = {
            username:users.username,
            password:users.password,
            data:document.getElementById("data1").value,
            subject:document.getElementById("subject").value,
            classes:document.getElementById("classes").value,
            homework:document.getElementById("homework").value,
            thereornot:document.getElementById("thereornot").value,
            tests:document.getElementById("tests").value,
            seefromparent:"не"
        };        
        table.removeChild(table.childNodes[br]);
        var tr = document.createElement("TR");
                table.appendChild(tr);
                
                var tddata = document.createElement("TH");
                var text = document.createTextNode(info.data);
                tddata.appendChild(text);
                tr.appendChild(tddata);
                
                var tdsubject = document.createElement("TH");
                var text = document.createTextNode(info.subject);
                tdsubject.appendChild(text);
                tr.appendChild(tdsubject);
                
                var tdclasses = document.createElement("TH");
                var text = document.createTextNode(info.classes);
                tdclasses.appendChild(text);
                tr.appendChild(tdclasses);

                var tdhomework = document.createElement("TH");
                var text = document.createTextNode(info.homework);
                tdhomework.appendChild(text);
                tr.appendChild(tdhomework);

                var tdthereornot = document.createElement("TH");
                var text = document.createTextNode(info.thereornot);
                tdthereornot.appendChild(text);
                tr.appendChild(tdthereornot);

                var tdtests = document.createElement("TH");
                var text = document.createTextNode(info.tests);
                tdtests.appendChild(text);
                tr.appendChild(tdtests);

                var tdseefromparent = document.createElement("TH");
                var text = document.createTextNode(info.seefromparent);
                tdseefromparent.appendChild(text);
                tr.appendChild(tdseefromparent);
                socket.emit('insertData',info);

                var tr = document.createElement("TR");
            tr.setAttribute("class","tr");
            table.appendChild(tr);
            
        var tddatainput = document.createElement("input");
        tddatainput.setAttribute("id","data1");
        var thdata = document.createElement('TH');
        thdata.appendChild(tddatainput);
        tr.appendChild(thdata);
        
        var thsubject = document.createElement('TH');
        var tdsubjectinput = document.createElement("input");
        tdsubjectinput.setAttribute("id","subject");
        thsubject.appendChild(tdsubjectinput);
       tr.appendChild(thsubject);
        
        var thclasses = document.createElement('TH');
        var tdclassesinput = document.createElement("input");
        tdclassesinput.setAttribute("id","classes");
        thclasses.appendChild(tdclassesinput);
        tr.appendChild(thclasses);

        var thhomework = document.createElement("TH");
        var tdhomeworkinput = document.createElement("input");
        tdhomeworkinput.setAttribute("id","homework");
        thhomework.appendChild(tdhomeworkinput);
       tr.appendChild(thhomework);

      
        var ththereornot = document.createElement("TH");  
        var tdthereornotinput = document.createElement("input");
        tdthereornotinput.setAttribute("id","thereornot");
        ththereornot.appendChild(tdthereornotinput);
       tr.appendChild(ththereornot);

        var thtests = document.createElement("TH");
        var tdtestsinput = document.createElement("input");
        tdtestsinput.setAttribute("id","tests");
        thtests.appendChild(tdtestsinput);
       tr.appendChild(thtests);

        var thseefromparent = document.createElement("TH");
        var texts = document.createTextNode("не");
        
        thseefromparent.appendChild(texts);
        
       tr.appendChild(thseefromparent);
       br++;

}