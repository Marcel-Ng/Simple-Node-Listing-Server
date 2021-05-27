const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer =  require('../middleware/multer-config')

const stufdCtrl = require("../controllers/stuff");

router.get('/', auth, stufdCtrl.getAllStuff);
router.post('/',  auth, multer, stufdCtrl.createThing);
router.get('/:id',  auth, stufdCtrl.getOneThing);
router.put('/:id',  auth, multer, stufdCtrl.modifyThing);
router.delete('/:id',  auth, stufdCtrl.deleteThing);



module.exports = router;