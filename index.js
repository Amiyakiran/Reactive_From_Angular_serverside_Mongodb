//import express
const express = require('express')
//import cors
const cors = require('cors')
//import dataService
const dataService = require('./dataService')


//create server app using express
const server = express()
//use cors to tell cors that with which port the serve want to share data
server.use(cors({
    origin:'http://localhost:4200'
}))

// to parse json data
server.use(express.json())


//set up port for server app
server.listen(3000,()=>{
    console.log('server started at 3000');
})


//submit api call

server.post('/submit',(req,res)=>{
    console.log('inside register Api');
    console.log(req.body);
    dataService.submit(req.body.firstname,req.body.middlename,req.body.lastname,req.body.email,req.body.phone,req.body.dob,req.body.address,req.body.aadhaar,req.body.gender,req.body.tenth,req.body.tenthsch,req.body.tenthcgpa,req.body.plustwo,req.body.plustwosch,req.body.plustwocgpa,req.body.bachelors,req.body.university,req.body.status,req.body.cgpa,req.body.selectedjob,req.body.attempts,req.body.check).then((result)=>{
        res.status(result.statusCode).json(result)
    })
    
})