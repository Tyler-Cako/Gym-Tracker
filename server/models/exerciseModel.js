const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    exerciseType: {
        type: String,
        required: [true, 'Please add an exercise type']
    },
    weight: {
        type: Number,
        required: [true, 'Please add a valid number of weight']
    },
    reps: {
        type: Number,
        required: [true, 'Please add a valid number of reps']
    },
    primary: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Exercise', exerciseSchema)