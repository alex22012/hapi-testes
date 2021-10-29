const mongoose = require("mongoose")

const connect = async () => {
    mongoose.Promise = global.Promise
    try {
        await mongoose.connect("mongodb+srv://alex:Aganinha220@cluster0.5ovhs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        console.log("Mongo ok")
    } catch (error) {
        console.log(error)
    }

}

connect()

module.exports = mongoose