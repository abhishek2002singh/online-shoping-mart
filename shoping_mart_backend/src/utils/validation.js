const validator = require('validator')

const  validateSignUpData = (req) =>{
   const {firstName, lastName , emailId , password} = req.body
   if(!firstName || lastName){
    throw new Error("please enter the name")
   }
   else if(!validator.isEmail(emailId)){
    throw new Error("please enter correct email")
   }
   else if(!validator.isStrongPassword(password)){
    throw new Error("please enter correct  and more strong password")
   }
}

module.exports ={
   validateSignUpData
}