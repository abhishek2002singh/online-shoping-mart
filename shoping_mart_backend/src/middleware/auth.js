const jwt = require('jsonwebtoken')
const User = require('../models/user')

const userAuth = async (req , res , next) =>{
    try{
        const {token} = req.cookies;

        if(!token){
            throw new Error("token is not valid")
        }

    const decodedObj = await jwt.verify(token , "INSTA@GRAM")

    const {_id} = decodedObj;
    const user = await User.findById(_id)

    if(!user){
        throw new Error("user not found please login again")
    }

    req.user = user

    next()

    }catch(err){
        res.status(401).send("Error: " + err.message)
    }
    


}

module.exports = {
    
    userAuth ,
}