var assert = require('assert');
    
    module.exports = {
        findDocument : function(db,username,callback){
            var collection = db.collection('schoolOcenka');
               collection.find({username:username}).toArray(function(err,docs){
                assert.equal(err,null);
                callback(docs);
            });  
        }
    }
    //valeri-parent