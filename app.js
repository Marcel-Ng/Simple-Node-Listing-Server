// mongoDB password: cELKzBweaDFXXDuq
// mongoDb connection: mongodb+srv://will:<password>@cluster0-2srgk.mongodb.net/test?retryWrites=true&w=majoritycd 

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Thing = require('./models/thing');
const app = express();

mongoose.connect('mongodb+srv://will:cELKzBweaDFXXDuq@cluster0-2srgk.mongodb.net/test?retryWrites=true&w=majoritycd')
.then(()=>{
    console.log('Successfuly connected to Mongo DB Atlas!');
})
.catch(error => {
    console.log('Unable to connect to the database');
    console.error(error);
});

// app.use((req, res, next) => {
//     console.log("Request received");
//     next();
// })

// app.use((req, res, next) => {
//     res.status(201);
//     next();
// })


// app.use((req, res, next) => {
//     res.json({message: 'Your request is received. Thanks'});
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Request sent successfully!');
// })

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

// app.post("/api/stuff", (req, res, next) => {
//     console.log(req.body);
//     res.status(201).json({
//         message: "Thing created successfuly!"
//     });
// });

// updated post route for the mongoose
app.post("/api/stuff", (req, res, next) => {
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
                message: "Post svaed successfully"})}
    ).catch(
        error => {
            res.status(400).json({
                error: error,
                message: 'Post not saved!'
            });
        }
    )
});

app.use("/api/stuff", (req, res, next) => {
    // const stuff = [
    //     {
    //         _id: 'hgghkdw',
    //         title: 'My first thing',
    //         description: 'The thing we just wanna sell right now is too awsome',
    //         imageUrl: 'C:\projects\nodeApps\go-full-stack-2\asseets\online.jpg',
    //         price: 49000,
    //         userId: 'rhsd445',
    //     },
    //     {
    //         _id: 'hggdhkdw',
    //         title: 'My Second thing',
    //         description: 'The Second thing we just wanna sell right now is too awsome',
    //         imageUrl: 'C:\projects\nodeApps\go-full-stack-2\asseets\online.jpg',
    //         price: 2000,
    //         userId: 'rhsd445',
    //     }
    // ];

    // res.status(200).json(stuff);

    Thing.find().then(
        things => {
            res.status(200).json(things);
        }
    ).catch(
        error => {
            res.status(400).json(error);
        }
    )
});
module.exports = app;