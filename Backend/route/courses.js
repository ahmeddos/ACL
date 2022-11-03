const express = require('express')
const {
    getCourses,
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse
  
} = require ('../controllers/courseControllers.js') 
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//router.use(requireAuth)

//Get all Courses
router.get('/', getCourses)

//Get single Course
router.get('/:id', getCourse)

//Create Course
router.post('/', createCourse)

//Delete Course
router.delete('/:id', deleteCourse)

//Update Course
router.patch('/:id', updateCourse)

// Filter a Course
//router.get('/coursefilter/',filterCourse)

module.exports = router; 