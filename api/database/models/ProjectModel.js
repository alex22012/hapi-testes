const ProjectSchema = require("../schemas/ProjectSchema")
const mongoose = require('../MongooseConnection')

module.exports = mongoose.model("Project", ProjectSchema)