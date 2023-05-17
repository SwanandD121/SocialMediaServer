import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'

// Routes
const app = express();

// Middleware
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

dotenv.config();

mongoose.connect("mongodb+srv://swananddeshpande121:swananddeshpande121@cluster0.h2nvjxy.mongodb.net/SocialMedia_1?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> app.listen(6969, ()=> console.log("Listening"))).catch(()=> console.log(error));

// Usage of Routes
app.use('./auth', AuthRoute)
app.use('./user', UserRoute)