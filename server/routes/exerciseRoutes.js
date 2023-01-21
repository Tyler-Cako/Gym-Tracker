const express = require('express')
const router = express.Router()
const { 
    getExercises,
    setExercise,
    updateExercise,
    deleteExercise,
    getExerciseByType
    } = require('../controllers/exerciseController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getExercises)

router.get('/:exerciseId', protect, getExerciseByType)

router.post('/', protect, setExercise)

router.put('/:id', protect, updateExercise)

router.delete('/:id', protect, deleteExercise)


module.exports = router