const {MongoClient,ObjectID} = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp",(error,client)=>{
    if(error){
        return console.log("unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB");
    const db = client.db("TodoApp");
/* 
    db.collection("Todos").deleteMany({text:"get out of cz"}).then((result)=>{
        console.log(result);
    }); */
    db.collection("Todos").findOneAndDelete({completed:true}).then((result)=>{
        console.log(result);
    });

});