//emlab.com
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var findDocuments = require('./public/modules/findDocument.js');
var findDocument = require('./public/modules/findDocumentO.js');
var findDocumentBypName = require('./public/modules/findDocumentBypName.js');
var	assert = require('assert');
var app = express();    
var server = require('http').Server(app);
var io = require('socket.io')(server);
var findDocumentByusername = require('./public/modules/findDocumentbyUsername.js');
var insertDocument = require('./public/modules/insertDocument.js');
var port = process.env.PORT || 3333;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});
app.use("/static",express.static("./public"));
app.get("/",function(req,res){
	res.render("./login.pug");		
});
var url = "mongodb://valeri:dodo2110@ds163698.mlab.com:63698/school";
var userInfo ={};
var parentUser = {};
var parentPrem = false;
var tdoc = {};
io.on('connection',function(socket){
    socket.on('user',function(user){
        MongoClient.connect(url,function(err,db){
			assert.equal(null,err);
			console.log("Connected correcly to server");
			findDocuments.findDocument(db,user.username,user.password,user.firstname,user.lastname,function(doc){					
                    db.close();
                    console.log(doc.length);
                    if(doc.length > 0 && doc[0].teacher == false && doc[0].parent == false){
                        io.emit('DB',true);
                        userInfo = user;   
                    }
                    if(doc.length > 0 && doc[0].teacher == true){
                        tdoc = doc;
                        io.emit('Teacher',true);
                        userInfo = user;
                    }
                    if(doc.length > 0 && doc[0].parent == true){
                       parentUser = user;
                        parentPrem =true;
                        io.emit('Parent',true);
                       
                    }
			});

		}); 
    });
    socket.emit('parentinfo',parentUser);
    socket.on('teacherSarch',function(username){
           MongoClient.connect(url,function(err,db){
            assert.equal(null,err);
            console.log(username);
			console.log("Connected correcly to server");
			findDocumentByusername.findDocument(db,username,function(doc){					
                    db.close();
                    userInfo = doc[0];
                    if(doc.length > 0){
                        io.emit('visit',true);
                    }
			});
           });
    });

    socket.emit('info',userInfo);
    socket.on('UserInfo',function(user){
       MongoClient.connect(url,function(err,db){
			assert.equal(null,err);
			console.log("Connected correcly to server");
            console.log("userInfo");
             findDocument.findDocument(db,user.username,user.password,function(docs){
                    db.close();
                    console.log('asd');
                    if(docs.length > 0){
                        console.log('asd');
                      io.emit('infoOcenka',docs);
                    }else{
                        io.emit('NOT',docs);
                    }
                    
            });

		});
    });
 
     socket.on('infooocenka',function(data){
         console.log('asd123');
       MongoClient.connect(url,function(err,db){
			assert.equal(null,err);
			console.log("Connected correcly to server123");
           var username = "";
            //-parent
            for(i=0;i<data.username.length - 7;i++){
                username +=data.username[i];
                
            }
            console.log(data.username);
             findDocumentBypName.findDocument(db,username,function(docs){
                    db.close();
             console.log(userInfo);
                        console.log(docs);
                    if(docs.length > 0){
                        console.log('inParent');
                      io.emit('infoocenka',docs);
                    }else{
                        io.emit('NOT',docs);
                    }
                    
            });

		});
     }); 
        /*username,password,data,subject,classes,homework,thereornot,tests,seefromparent*/ 
        /*username:users.username,
    password:users.password,
    data:document.getElementById("data").value,
    subject:document.getElementById("subject").value,
    classes:document.getElementById("classes").value,
    homework:document.getElementById("homework").value,
    thereornot:document.getElementById("thereornot").value,
    tests:document.getElementById("tests").value,
    seefromparent:"не"*/ 
        socket.on('insertData',function(info){
            MongoClient.connect(url,function(err,db){
			    assert.equal(null,err);
		    	console.log("Connected correcly to server");
                insertDocument.insertDocument(db,info.username,info.password,info.data,info.subject,info.classes,info.homework,info.thereornot,info.tests,info.seefromparent,function(docs){
                    db.close();
                    
            });
             });
        }); 
        socket.on('Upload',function(data){
            console.log("Upload");
            console.log(data);
            let username = "";
            //-parent
            for(i=0;i<data.username.length - 7;i++){
                username +=data.username[i];
                
            }
             MongoClient.connect(url,function(err,db){
			    assert.equal(null,err);
		    
            var uploadDocument = require('./public/modules/updataDocument.js');
            uploadDocument. updateDocument(db,username,function(){
                db.close();
            });
             });
        });                
     socket.on('IsHeTeacher',function(data){
         if(tdoc.length > 0){
     console.log();
           }else{
                io.emit('Not',false);
                console.log("Teacher");
         
         }
    });
});