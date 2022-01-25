
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors')

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then((client) => {
  const db = client.db('countries');
  const funfactsCollection = db.collection('funfacts');
  const funfactsRouter = createRouter(funfactsCollection);
  app.use('/api/funfacts', funfactsRouter);

})
.catch(console.error);


// app.get('/', function(req, res){
//     res.send({message:'Hello World!'});
// })

app.listen(5000, function () {
    console.log("App running on port 5000");
})

