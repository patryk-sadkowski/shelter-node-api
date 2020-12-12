const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Cat', 'Dog'],
        required: true
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
    }
}, {
    timestamps: true,
})

const Cat = mongoose.model('Cats', catSchema)
module.exports = Cat