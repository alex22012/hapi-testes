const {Schema} = require('mongoose')

//Exportando sem criar constante
module.exports = new Schema({
    title:String,
    team:Number,
    startDate:Date,
    endDate:Date
})