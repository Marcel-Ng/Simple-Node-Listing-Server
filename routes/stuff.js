const express = require('express');
const router = express.Router();
const stufdCtrl = require("../controllers/stuff");

router.get('/', stufdCtrl.getAllStuff);
router.post('/', stufdCtrl.createThing);
router.get('/:id', stufdCtrl.getOneThing);
router.put('/:id', stufdCtrl.modifyThing);
router.delete('/:id', stufdCtrl.deleteThing);



module.exports = router;