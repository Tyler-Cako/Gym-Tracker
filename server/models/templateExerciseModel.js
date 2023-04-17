const mongoose = require('mongoose')

const templateExerciseSchema = mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please add template name"]
    },
    reps : {
        type: Number,
        required: [true, "Please add number of reps"]
    },
    primary : {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('templateExercise', templateExerciseSchema)