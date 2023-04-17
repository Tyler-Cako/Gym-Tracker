const mongoose = require('mongoose')
const templateExerciseSchema = require('./templateExerciseModel')

const templateSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name : {
        type: String,
        required: [true, "please make a template name"]
    },
    templates : [templateExerciseSchema]
})

const template = mongoose.model('Template', templateSchema)
const templateExercise = mongoose.model("templateExercise", templateExerciseSchema)

module.exports = {
    template,
    templateExercise
}