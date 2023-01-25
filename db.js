//to import mongoose in db.js
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);


//using mongoose define connection string
mongoose.connect('mongodb://localhost:27017/application',()=>{
    console.log('mongodb connected successfully');
})

//create model for the project
//collection-users

const Applicant = mongoose.model('Applicant',{
    firstname:String,
    middlename:String,
    lastname:String,
    email:String,
    phone:Number,
    dob:String,
    address:String,
    aadhaar:Number,
    gender:String,
    tenth:String,
    tenthsch:String,
    tenthcgpa:String,
    plustwo:String,
    plustwosch:String,
    plustwocgpa:String,
    bachelors:String,
    university:String,
    status:String,
    cgpa:String,
    selectedjob:[],
    attempts:Number,
    check:Boolean
    
})

//export the model
module.exports={
    Applicant
}