const TaskSchema = require("../schemas/TaskSchema")
const mongoose = require("../MongooseConnection")

module.exports = mongoose.model("Task", TaskSchema)