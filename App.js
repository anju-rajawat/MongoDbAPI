import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Adminroute from './routes/admin.route.js';
import UserRoute from './routes/User.route.js';
import cors from 'cors';

const app=express();

mongoose.connect("mongodb://localhost:27017/demo").then(()=>{
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/admin",Adminroute);
    app.use("/user",UserRoute);
    
    app.listen(3003,()=>{
        console.log("Server started");
    })
}).catch((err)=>{
    console.log("Not started ",err);
})

