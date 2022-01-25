// import { Server } from 'mongodb/lib/core';

const express = require('express');
const app = express();
// const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors')

app.use(cors());

app.get('/', function(req, res){
    res.send({message:'Hello World!'});
})

app.listen(5000, function () {
    console.log("App running on port 5000");
})

// export default Server;