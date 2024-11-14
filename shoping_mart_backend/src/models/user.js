const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt =require('bcrypt');
const { isLowercase } = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        minlength: [2, 'First name must be at least 2 characters long'],
        maxlength: [50, 'First name can be up to 50 characters long']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        minlength: [2, 'Last name must be at least 2 characters long'],
        maxlength: [50, 'Last name can be up to 50 characters long']
    },
    age: {
        type: Number,
        min: [0, 'Age cannot be negative'],
        max: [120, 'Age must be less than or equal to 120']
    },
    mobileNumber: {
        type: String,
        unique: true,
        sparse: true, // Makes unique constraint apply only to non-null values
        match: [/^[0-9]{10}$/, 'Mobile number must be 10 digits']
    },
    password: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: [true, 'Email ID is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Email ID must be in a valid format']
    },
    images: {
        type: String,
        default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZxwCJ0PDLfFEpF09-lMCMhFMtCFoTVUJ0Q&s",
    },
    gender: {
        type: String,
        isLowercase:true,
        enum: {
            values: ['male', 'female', 'Other'],
            message: 'Gender must be either Male, Female, or Other'
        }
    }
}, {
    timestamps: true
});


userSchema.methods.getJWT = async function (){
    const user = this;

    const token = await jwt.sign({_id:user._id} ,"INSTA@GRAM",{
        expiresIn:"7d"
    })
    return token
}

userSchema.methods.validatePassword = async function(passwordInputUser){
    const user = this
    const passwordHash = user.password;

    const isPasswordValid = await bcrypt.compare(
        passwordInputUser , 
        passwordHash
    )
    return isPasswordValid
}


module.exports = mongoose.model('User', userSchema);
