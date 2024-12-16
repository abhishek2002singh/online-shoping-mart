const express = require('express');
const app = express();
const dataConnection = require('./src/config/database');

const cookiesParser = require('cookie-parser')

const dotenv = require('dotenv');

const port = process.env.PORT || 7000

const cors = require('cors');
const corsOptions ={
    // origin:'https://gregarious-melba-b4d343.netlify.app', 
     origin:'https://aesthetic-lolly-93638a.netlify.app',    
    credentials:true,            //access-control-allow-credentials:true
  
}
app.use(cors(corsOptions));



// Middleware to parse JSON requests
app.use(express.json());
app.use(cookiesParser())

const userRoutes = require('./src/router/user'); 
const profileRouter = require('./src/router/profile')

// Use user routes
app.use('/', userRoutes); // Prefix your routes with '/api'
app.use('/' ,profileRouter)

dataConnection()
    .then(() => {
        app.listen(port, () => {
            console.log("App running on port 7000");
        });
    })
    .catch((error) => {
        console.error('Failed to connect to the database:', error);
    });
