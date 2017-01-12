var assert = require('assert');
module.exports = {
         updateDocument : function(db,username,callback) {
        // Get the documents collection
        var collection = db.collection('schoolOcenka');
        // Update document where a is 2, set b equal to 1
        collection.update({ username : username,seefromparent:"не" }
            , { $set: { seefromparent:"да" } }, function(err, result) {
            assert.equal(err, null);
            console.log("Updated the document with the field a equal to 2");
            callback(result);
        });  
        }
};