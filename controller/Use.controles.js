import User from '../model/user.model.js';

export const Users = (req,res,next)=>{
    User.create(req.body).then((result) => {
       res.status(200).json({message:" Create succes "+result})  
    }).catch((err) => {
        res.status(400).json({err:"unotherize "+err});
    });
}