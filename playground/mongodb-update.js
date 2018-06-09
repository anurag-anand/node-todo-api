const {MongoClient,ObjectID} = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp",(error,client)=>{
    if(error){
        return console.log("unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB");
    const db = client.db("TodoApp");
  /*   db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID("5b1a9cb3836253275071ca79")
    },{
        $set:{
            completed: true
        }

    },{
        returnOriginal :false
    }).then((result)=>{
        console.log(`we got ${result}`);
    }); */
    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5b1a940d5113591fa4d37b87")
    },{
        $set:{
            name: "Anurag",
            location: "India"
        },
        $inc:{
                age: -2
        }

    },{
        returnOriginal :false
    }).then((result)=>{
        console.log(result);
    });

});