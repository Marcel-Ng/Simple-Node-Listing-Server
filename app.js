const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('./models/thing');
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

    const thing = new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId
    });
    thing.save().then(
        () => {
            res.status(201).json({
                message: "Product saved succefully"
            });
        }
    ).catch(
        error => {
            res.status(400).json({
                error: error
            })
        }
    )

})

app.get('/api/stuff/:id', (req, res, next) => {
    Thing.findOne({
        _id : req.params.id
    }).then(
        thing => {
            res.status(200).json(thing)
        }
    ).catch(
        error => {
            res.status(404).json(error)
        }
    )
})


app.use('/api/stuff', (req, res, next) => {
  Thing.find().then(
      things => {
          res.status(200).json(things)
      }
  ).catch(
      error => {
          res.status(400).json({
              error: error
          })
      }
  )
})


module.exports = app;