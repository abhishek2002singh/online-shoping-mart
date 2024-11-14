const express = require('express');
const User = require('../models/user');
const profileRouter = express.Router();
const { userAuth } = require('../middleware/auth');

const validateEditProfileData = (req) => {
    const allowEditField = [
        "firstName",
        "lastName",
       
        
        "gender",
        "age",
        
    ];
    
    return Object.keys(req.body).every(field => allowEditField.includes(field));
};

// View user profile
profileRouter.get('/profile/view', userAuth, async (req, res) => {
    try { 
        const accessUser = req.user;
        res.send(accessUser);
    } catch (err) {
        res.status(400).send("Error: Your profile does not exist, please login again.");
    }
});

// Edit user profile
profileRouter.patch('/profile/edit', userAuth, async (req, res) => {
    try {
        if (!validateEditProfileData(req)) {
            return res.status(400).send("Error: Only specific fields (firstName, lastName, photoUrl, gender, age, about, skills) can be edited.");
        }

        const currentUser = req.user;

        Object.keys(req.body).forEach(key => {
            currentUser[key] = req.body[key];
        });
        
        await currentUser.save();

        res.json({
            message: `${currentUser.firstName}, your profile has been updated successfully.`,
            data: currentUser,
        });

    } catch (err) {
        res.status(401).send("Error: " + err.message);
    }
});

module.exports = profileRouter;
