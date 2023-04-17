const express = require('express')
const router = express.Router()
const {
    getTemplates,
    getTemplatesByType,
    setTemplate,
    updateTemplate,
    deleteTemplate,
} = require('../controllers/templateController')

const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getTemplates)

router.post('/', protect, setTemplate)