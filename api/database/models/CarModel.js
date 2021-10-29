const CarSchema = require('../schemas/CarSchema')
const mongoose = require('../MongooseConnection')

module.exports = mongoose.model('Car', CarSchema)