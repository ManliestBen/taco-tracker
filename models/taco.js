const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tacoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tasty: {
        type: Boolean
    }
})

module.exports = mongoose.model('Taco', tacoSchema);