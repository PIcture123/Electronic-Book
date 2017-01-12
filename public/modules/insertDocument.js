var assert = require('assert');
module.exports ={
    insertDocument : function(db,username,password,data,subject,classes,homework,thereornot,tests,seefromparent,callback){
					 var collection = db.collection('schoolOcenka');
					 collection.insertMany([
							 {username:username,password:password,data:data,subjet:subject,classes:classes,homework:homework,thereornot:thereornot,tests:tests,seefromparent:seefromparent}
					 ],function(err,result){
					 assert.equal(err,null);
					 console.log("Inserted 1 documents into the collection");
					 callback(result);
					 }); 
   }
}