const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 15
    },
    color: {
        type: String,
        required: true,
        min: 3,
        max: 15
    },
    male: {
        type: String,
        required: true,
        min: 3,
        max: 15
    }    
})

module.exports = mongoose.model('Dog', dogSchema)