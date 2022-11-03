const mongoose = require ('mongoose')

const schema = mongoose.Schema

const courseSchema = new schema({
    title:{
        type: String,
        required: true
    },
    length:{
        type: Number,
        required : true
    },
    price:{
        type: Number,
        required : true
    },
    user_id:{
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    rating: {

        type: Number,
        required: false
    },
    subject: {

        type: String,
        required: true
    }
}, {timestamps: true})


module.exports = mongoose.model('Course', courseSchema)

