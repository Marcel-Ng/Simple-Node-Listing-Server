const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
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
// other alternatives to this call above
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({extended: true})); 
// app.use(express.json());   

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: "Your request don reach us"        
    })
})

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'My first thing',
            description: 'All of the info about my first thing',
            imageUrl: '',
            price: 4900,
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'My second thing',
            description: 'All of the info about my second thing',
            imageUrl: '',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];

    res.status(200).json(stuff);
})


module.exports = app;