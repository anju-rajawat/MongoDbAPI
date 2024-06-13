import Admin from "../model/admin.model.js";


export const SignUp = (req,res,next)=>{
    Admin.create(req.body).then((result) => {
        res.status(200).json({Message:"Sign Up Succes",result});
    }).catch((err) => {
        res.status(401).json({err:"Unothorized ",err});
    });
}

export const DeleteUser=(req,res,next)=>{
    console.log(req.body)
    Admin.deleteOne({name:req.body.name}).then((result) => {
    
         res.status(200).json({Message:"Delete Succes",result});
    
    }).catch((err) => {
           res.status(401).json({err:"Unothorized ",err});
    });
}

export const Fetch = (req, res, next) => {
    Admin.find()
        .then((result) => {
            res.status(200).json({ message: "Result is", data: result });
        })
        .catch((err) => {
            res.status(400).json({ error: "Not get " + err });
        });
}
