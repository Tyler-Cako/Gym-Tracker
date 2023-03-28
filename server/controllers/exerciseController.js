// asyncHandler wrapped in functions to work asynconously with try/catch of mongoose/mongodb
const asyncHandler = require('express-async-handler')
const Exercise = require('../models/exerciseModel')
const User = require('../models/userModel')

// Get ALL exercises
// Routes to /api/exercises
// Private
const getExercises = asyncHandler(async (req, res) => {
    const exercises = await Exercise.find({ user: req.user.id })

    res.status(200).json(exercises)
})

// Get all exercises by a specific exercise type
// Routes to /api/exercises
//Private
const getExerciseByType = asyncHandler(async (req, res) => {
    const exercises = await Exercise.find({
        user: req.user.id,
        exerciseType: req.params.exerciseId
    })

    res.status(200).json(exercises)
})

// Make a new exercise
// Routes to /api/exercises
// Private
const setExercise = asyncHandler(async (req, res) => {
    if (!req.body.exerciseType || !req.body.weight || !req.body.reps) {
        res.status(400)
        throw new Error('Please add a valid exercise')
    }

    const exercise = await Exercise.create({
        exerciseType: req.body.exerciseType,
        user: req.user.id,
        weight: req.body.weight,
        reps: req.body.reps,
        primary: req.body.primary
    })

    res.status(200).json(exercise)
})

// updates an existing exercise
// Routes to /api/exercises/{ID}
// Private
const updateExercise = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id)

    if (!exercise) {
        res.status(400)
        throw new Error('Exercise not found')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure only user's id matches goal user
    if (exercise.user.toString() != req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatedExercise)
})

// Deletes an existing exercise
// Routes to /api/exercises/{ID}
// Private
const deleteExercise = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id)

    if (!exercise) {
        res.status(400)
        throw new Error('Exercise not found')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure only user's id matches goal user
    if (exercise.user.toString() != req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await exercise.remove()

    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getExercises,
    setExercise,
    updateExercise,
    deleteExercise,
    getExerciseByType
}