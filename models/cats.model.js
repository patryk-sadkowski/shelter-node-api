const { Schema, Model } = require('mongoose')

const catSchema = new Schema({
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

const Cat = Model('Cats', catSchema)
module.exports = Cat;