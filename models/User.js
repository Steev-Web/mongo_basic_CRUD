
const { mongoose } = require("../db"); //commonjs module system - default in nodejs

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['user', 'admin'], default: 'user'},
}, {timestamps: true}); //automatically create createdAt and updatedAt fields

const User = mongoose.model('User', userSchema);

module.exports = User; //commonjs module system - default in nodejs