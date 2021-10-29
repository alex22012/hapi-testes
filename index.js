const Hapi = require("@hapi/hapi")
const userRoute = require("./api/routes/userRoute")
const projectRoute = require("./api/routes/projectRoute")
const taskRoute = require("./api/routes/taskRoute")

const server = Hapi.server({
    port:3000,
    host:"localhost"
})

server.start().catch(err => {
    console.log(err)
})
server.route(userRoute)
server.route(taskRoute)
server.route(projectRoute)

module.exports = server.listener