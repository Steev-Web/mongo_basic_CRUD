const mongoose = require('mongoose');  // mongoosecommonjs module system - default in nodejs

const { Schema } = mongoose;


const taskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    status: {type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending'},
    dueDate: {type: Date},
    owner: {type: String, required: true},
}, {timestamps: true}); //automatically create createdAt and updatedAt fields


const Task = mongoose.model('Task', taskSchema);

module.exports = Task; //commonjs module system - default in nodejs