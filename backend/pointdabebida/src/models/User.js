const {Schema , model} = require('mongoose');

const UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required:true},
    password: {type: String, required: true, min:4, max:10},
},{
    timestamps:true,
});

// Exportar o modelo
module.exports = model('User', UserSchema);