// This will define the model for our products to sale
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TaskListSchema = new Schema(
    {
        taskName: { type: String, index: true, unique: true },
        taskDesc: String,
        taskDueDate: Date,
        taskStatus:  { 
            type: String,             
            enum : ['not_started', 'started', 'completed'], 
            default: 'not_started' 
            },
    }, { timestamps: true }
);

module.exports = mongoose.model('task', TaskListSchema);


