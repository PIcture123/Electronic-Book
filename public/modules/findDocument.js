 var assert = require('assert');
    
    module.exports = {
        findDocument : function(db,username,password,firstname,lastname,callback){
            var collection = db.collection('schoolPrem');
               collection.find({username:username,password:password,firstname:firstname,lastname:lastname}).toArray(function(err,docs){
                assert.equal(err,null);
                callback(docs)
            });  
        }
    }
