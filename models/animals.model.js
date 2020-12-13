const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Cat', 'Dog'],
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    sex: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    placeOfFound: {
        city: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        }
    },
    photos: {
        type: Array,
    }
}, {
    timestamps: true,
})

const Animal = mongoose.model('Animals', animalSchema)
module.exports = Animal