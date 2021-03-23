const Taco = require('../models/taco');

module.exports = {
    index,
    new: newTaco
}

function index (req, res) {
    Taco.find( {}, (err, tacos) => {
        if (err) console.log(err);
        res.render('tacos/index', {
            title: 'All Tracker',
            tacos
        })
    })
}

function newTaco (req, res) {
    
}