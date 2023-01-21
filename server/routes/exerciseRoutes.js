const express = require('express')
const router = express.Router()
const { 
    getExercises,
    setExercise,
    updateExercise,
    deleteExercise,
    } = require('../controllers/exerciseController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getExercises)

router.get('/:exerciseId', protect, getExercises)

router.post('/', protect, setExercise)

router.put('/:id', protect, updateExercise)

router.delete('/:id', protect, deleteExercise)


module.exports = router