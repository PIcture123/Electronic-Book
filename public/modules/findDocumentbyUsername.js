 var assert = require('assert');
    
    module.exports = {
        findDocument : function(db,username,callback){
            var collection = db.collection('schoolPrem');
               collection.find({username:username}).toArray(function(err,docs){
                assert.equal(err,null);
                console.log(docs);
                callback(docs)
            });  
        }
    }