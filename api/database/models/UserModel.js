const UserSchema = require("../schemas/UserSchema")
const mongoose = require("../MongooseConnection")

module.exports = mongoose.model("User", UserSchema)