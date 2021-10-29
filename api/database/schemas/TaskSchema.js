const {Schema} = require('mongoose')

const TaskSchema = new Schema({
    title:String,
    complexity:Number,
    dificulty:Number,
    startDate:Date,
    endDate:Date,
})

module.exports = TaskSchema