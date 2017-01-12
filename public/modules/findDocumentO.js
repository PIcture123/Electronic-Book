 var assert = require('assert');
    
    module.exports = {
        findDocument : function(db,username,password,callback){
            var collection = db.collection('schoolOcenka');
               collection.find({username:username,password:password}).toArray(function(err,docs){
                assert.equal(err,null);
                callback(docs);
            });  
        }
    }