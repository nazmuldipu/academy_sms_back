nazmuldipu

owiNh1teUvZl0KQi


mongodb+srv://nazmuldipu:<password>@sandbox.qotte.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nazmuldipu:<password>@sandbox.qotte.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

