const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const app = express();

// Template for connecting to the mongoose DB
// mongoose.connect('mongodb+srv://username:<PASSWORD>@cluster0-pme76.mongodb.net/test?retryWrites=true')
/**
 * My Database connection
 * Name: marcel
 *  Password: DjNMoZBYRMRITW8I
 * mongodb+srv://marcel:<password>@cluster0.2wopq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
 */

mongoose.connect('mongodb+srv://marcel:DjNMoZBYRMRITW8I@cluster0.2wopq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use(bodyParser.json())

app.use('/api/stuff', stuffRoutes)

module.exports = app;