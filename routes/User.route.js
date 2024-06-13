import express from 'express';
import {Users} from '../controller/Use.controles.js';
const UserRoute=express.Router();

UserRoute.post('/usercreate',Users);

export default UserRoute;