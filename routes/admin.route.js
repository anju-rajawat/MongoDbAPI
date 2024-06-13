import {SignUp,DeleteUser,Fetch} from '../controller/admin.controles.js';
import express from 'express';

const Adminroute=express.Router();
Adminroute.post("/SignUp",SignUp);
Adminroute.delete('/delete', DeleteUser);
Adminroute.get('/Fetch',Fetch);
export default Adminroute;
