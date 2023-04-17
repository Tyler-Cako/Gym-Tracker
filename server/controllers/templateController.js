const asyncHandler = require('express-async-handler')
const Template = require('../models/templateModel')
const TemplateExercise = require("../models/templateExerciseModel")

// get ALL templates
// Routes to /api/templates
// Private
const getTemplates = asyncHandler(async (req, res) => {
    const templates = await Templates.find({ user: req.user.id })

    res.status(200).json(templates)
})

// Make a new template
// Routes to /api/templates
// Private

const setTemplate = asyncHandler(async(req, res) => {
    if (!req.body.templates || !req.body.name) {
        res.status(400)
        throw new Error('Please add a valid template')
    }

    const template = await Template.create({
        user: req.user.id,
        name : req.body.name,
        templates: req.body.templates,
    })

    res.status(200).json(template)
})

module.exports = {
    getTemplates,
    setTemplate
}