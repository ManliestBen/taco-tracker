var express = require('express');
var router = express.Router();
const tacosCtrl = require('../controllers/tacos');

router.get('/', tacosCtrl.index);
router.post('/', tacosCtrl.create)
router.delete('/:id', tacosCtrl.delete)
router.get('/:id', tacosCtrl.show)
router.put('/:id', tacosCtrl.update)

module.exports = router;
