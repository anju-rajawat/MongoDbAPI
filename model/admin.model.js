import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

let Admins = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        set: function(password) {
            console.log(password);
            
            const salt = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(password, salt);
        }
    }
});

let Admin = mongoose.model('admin', Admins);

Admin.comparePass = (password, encryptedPass) => {
    return bcrypt.compareSync(password, encryptedPass);
};

export default Admin;
