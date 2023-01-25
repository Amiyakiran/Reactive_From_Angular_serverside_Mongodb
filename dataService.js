//import db.js
const db = require('./db')


//submitfunction

const submit=(firstname,middlename,lastname,email,phone,dob,address,aadhaar,gender,tenth,tenthsch,tenthcgpa,plustwo,plustwosch,plustwocgpa,bachelors,university,status,cgpa,selectedjob,attempts,check)=>{
    return db.Applicant.findOne({
        aadhaar:aadhaar
    }).then((result)=>{
        console.log(result);
        if (result) {
            //acno already exist
            return{
              statusCode:401,
              message:'You have Already Registered!'
            }
          }
          else{
            //to add new user in node
            const newApplicant = new db.Applicant({
                firstname,
                middlename,
                lastname,
                email,
                phone,
                dob,
                address,
                aadhaar,
                gender,
                tenth,
                tenthsch,
                tenthcgpa,
                plustwo,
                plustwosch,
                plustwocgpa,
                bachelors,
                university,
                status,
                cgpa,
                selectedjob,
                attempts,
                check
            })
            // to save new user in mongodb
            newApplicant.save()
            return{
              statusCode:200,
              message:'Registration Successful'
            }
          }
    })
}



//export

module.exports={
    submit
}