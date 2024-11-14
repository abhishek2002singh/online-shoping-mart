const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcrypt');
const user = require('../models/user');

// User signup route
router.post('/signup', async (req, res) => {
    const { firstName, lastName, emailId, password, mobileNumber } = req.body;

    try {
        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            firstName,
            lastName,
            emailId,
            password: hashPassword,
            mobileNumber
        });

        // Save the user to the database
        const savedUser = await newUser.save();
        const token = await savedUser.getJWT();
  
      //add the token to cookie and send the respande back the user
       res.cookie("token" ,token ,{ expires :new Date(Date.now()+8*3600000)})

      
  
        
        res.status(201).json({ message: 'User registered successfully', user: savedUser });
        // res.send("signup successuffully" user)
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(400).json({ message: 'Signup failed', error: error.message });
    }
});

// User login route
router.post('/login', async (req, res) => {
    const { emailId, password } = req.body;

    try {
        const user = await User.findOne({ emailId });
        if (!user) {
            throw new Error("Email ID not present in the database");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            const token = await user.getJWT();
  
        //add the token to cookie and send the respande back the user
         res.cookie("token" ,token ,{ expires :new Date(Date.now()+8*3600000)})
          res.status(200).json({ message: 'Login successful', user });
            
        }
        else{
            throw new Error("Incorrect password");
        }
       

       
    } catch (error) {
        res.status(400).json({ message: 'Login failed', error: error.message });
    }
});

router.post('/logout' , (req ,res)=>{
    res.cookie("token" , null , {
        expires: new Date(Date.now())

    })
    res.send("logout successfully")
  })


module.exports = router;
