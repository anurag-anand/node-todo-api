const {MongoClient,ObjectID} = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp",(error,client)=>{
    if(error){
        return console.log("unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB");
    const db = client.db("TodoApp");

/*     db.collection('Todos').find({
        _id: new ObjectID("5b1a9cb3836253275071ca79")
    }).toArray().then((docs)=>{
        console.log("Todos");
        console.log(JSON.stringify(docs,undefined,2));
    },(error)=>{
        console.log("unable to fetch todos");
    }); */
    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count : ${count}`);
    },(error)=>{
        console.log("unable to fetch todos");
    });

});