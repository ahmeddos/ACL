require('dotenv').config()

const express = require('express')
const mongoose = require ('mongoose')
const app = express()
const bodyParser = require('body-parser');
const courseRoutes = require('./route/courses')
const adminRoutes = require('./route/admin')
const userRoutes = require('./route/user')
const filterCourse = require('./controllers/courseControllers')

//middleware
app.use(express.json())

app.use((req,res,next) =>{
console.log(req.path, req.method)
next()
})

//routes

const adminCont = require("./controllers/adminController");
const instructorCont = require("./controllers/adminController");
const copratetraineeCont = require("./controllers/adminController");
app.use(bodyParser.json());
app.use('/api/courses', courseRoutes)
app.use('/api/user',userRoutes)
app.use("/api", adminCont);
app.use("/api", instructorCont);
app.use("/api", copratetraineeCont);

//app.use('/api/admin', adminRoutes)




//connect to database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests
app.listen(process.env.PORT, () => 
{ console.log('istening on port 4001')})  
})
.catch((error) => console.log(error))


 

