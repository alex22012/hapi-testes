const mongoose = require("mongoose")

const createObjectId = (id) => {
    if(!mongoose.isValidObjectId(id))
        return null
    else 
        return mongoose.mongo.ObjectId(id)
}

module.exports = createObjectId