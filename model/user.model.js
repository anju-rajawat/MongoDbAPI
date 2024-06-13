import mongoose from "mongoose";

const Users=mongoose.Schema({
    name:{
        type:String

    },
    emial:{
        type:String,
        unique:true
    },
    contact:{
        type:String,

    },
    password:{

        type:String,
        trim: true,
        
        set: function(password){
            console.log(password)
            const salt = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(password , salt);
        
        }

    }
})
let User=mongoose.model('user',Users);

User.comparePass = (password, encryptedPass) => {
    return bcrypt.compareSync(password, encryptedPass);
};
// User.comparePass=(password,encryptedPass)=>{
//    return bcrypt.compareSyn(password,encryptedPass);
// }

export default User;
// ncs neno system
// hr@nenosystems.com