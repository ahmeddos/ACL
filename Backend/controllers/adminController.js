const express = require("express");
const router = express.Router();
const adminmodel = require('../models/adminModel');
const instructormodel = require('../models/instructorModel');
const copratetraineemodel = require('../models/corpratetraineeModel');

router.post("/addadmin", async (req,res) =>{
    const allAdmins = await adminmodel.find({});
    var adminExists = false;
    allAdmins.forEach(currentAdmin => {
        if(req.body.Username == currentAdmin.Username){
            adminExists = true;
        }
    });
    if(adminExists){
        res.send("Username already exists");
    }else{
        const admin = new adminmodel(req.body);
        await admin.save();
        res.send("Created");
    }
});
router.post("/addinstructor", async (req,res) =>{
    const allInstructor = await instructormodel.find({});
    var instructorExists = false;
    allInstructor.forEach(currentInstructor => {
        if(req.body.Username == currentInstructor.Username){
            instructorExists = true;
        }
    });
    if(instructorExists){
        res.send("Username already exists");
    }else{
        const instructor = new instructormodel(req.body);
        await instructor.save();
        res.send("Created");
    }
});
router.post("/addcopratetrainee", async (req,res) =>{
    const allcoprateTrainee = await copratetraineemodel.find({});
    var copratetraineeExists = false;
    allcoprateTrainee.forEach(currentcoprateTrainee => {
        if(req.body.Username == currentcoprateTrainee.Username){
            copratetraineeExists = true;
        }
    });
    if(copratetraineeExists){
        res.send("Username already exists");
    }else{
        const copratetrainee = new copratetraineemodel(req.body);
        await copratetrainee.save();
        res.send("Created");
    }
});


module.exports = router;