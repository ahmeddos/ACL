const Course = require ('../models/courseModel')
const mongoose = require ('mongoose')

//get all Courses
const getCourses = async (req, res) => {

    //const user_id = req.user._id
    const courses = await Course.find({}).sort({createdAt: -1})
    res.status(200).json(courses) 
}

//get single Course
const getCourse = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Course'})
    }
    const course = await Course.findById(id)

    if(!course){
        return res.status(404).json({error: 'No such Course'})
    }

    res.status(200).json(course)
}

//create new Course
const createCourse = async (req, res) => { 
    const {title, length, price, summary, instructor,subtitles, subject} = req.body

    let emptyFields =[]

    if(!title){
        emptyFields.push('title')
    }

    if(!length){
        emptyFields.push('length')
    }

    if(!instructor){
        emptyFields.push('instructor')
    }
    if(!summary){
        emptyFields.push('summary')
    }

    if(!subtitles){
        emptyFields.push('subtitles')
    }

    if(!rating){
        emptyFields.push('rating')
    }
    if(!subject){
        emptyFields.push('subject')
    }


    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in the empty fields.', emptyFields})
    }
    
    try{
    //const user_id = req.user._id
    const course = await Course.create({title, length, price,summary,instructor,subtitles,rating,subject})
    res.status(200).json(course)
    
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//delete a Course
const deleteCourse = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Course'})
    }

    const course = await Course.findOneAndDelete({_id : id})
   
    if(!course){
        return res.status(404).json({error: 'No such Course'})
    }

    res.status(200).json(course)

}

//update a Course
const updateCourse = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Course'})
    }

    const course = await Course.findOneAndUpdate({_id : id},{
    ...req.body
    })
   
    if(!course){
        return res.status(404).json({error: 'No such course'})
    }

    res.status(200).json(course)

}
//Filter a course
const filterCourse = async (req, res) => {
    const course = await Course.find({ ...req.body }).sort({ price: 1 })
    res.status(200).json(course)
}



module.exports = {
    getCourses,
    getCourse,
    createCourse,
    deleteCourse,
    updateCourse,
    filterCourse
}