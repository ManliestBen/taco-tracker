var express = require('express');
var router = express.Router();

const tacoController = require('../controllers/tacos')

/* GET users listing. */
router.get('/', tacoController.index);
router.post('/', tacoController.new );

module.exports = router;
