const Thing = require('../models/thing')

exports.createThing = (req, res, next) => {
    req.body.thing = JSON.parse(req.body.thing);
    const url = req.protocol + '://' + req.get('host');

    const thing = new Thing({
        title: req.body.thing.title,
        description: req.body.thing.description,
        imageUrl: url + '/images/' + req.file.filename,
        price: req.body.thing.price,
        userId: req.body.thing.userId
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

};

exports.getOneThing = (req, res, next) => {
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
}

exports.modifyThing = (req, res, next) => {
    let thing = ({_id: req.params.id})
    if(req.file){
        const url = req.protocol + '://' + req.get('host');

        const thing = {
            _id: req.params.id,
            title: req.body.thing.title,
            description: req.body.thing.description,
            imageUrl: url + '/images/' + req.file.filename,
            price: req.body.thing.price,
            userId: req.body.thing.userId
        };
    }else{
        const thing = {
            _id: req.params.id,
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
            userId: req.body.userId
        };
    }
    Thing.updateOne({
            _id: req.params.id
        }, thing).then(
            () => {
            res.status(201).json({
                message : "Thing updated successgully"
            })
            }
        ).catch(
            error => {
                res.status(400).json({
                    error: error
                })
            }
        )
};

exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({
        _id: req.params.id
    }).then(
        thing => {
            res.status(200).json({message: "Content deleted"})
        }
    ).catch(
        error => {
            res.status(404).json({
                message: error
            })
        }
    )
}

exports.getAllStuff = (req, res, next) => {
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
}