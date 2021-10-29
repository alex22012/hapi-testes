const taskHandler = require("../handlers/taskHandler")

module.exports = [
    {
        method:"GET",
        path:"/tasks",
        handler:(request, h) => taskHandler.getTasks(request, h)
    },
    {
        method:"POST",
        path:"/task",
        handler:(request, h) => taskHandler.postTask(request, h)
    },
    {
        method:"GET",
        path:"/task/{id}",
        handler:(request, h) => taskHandler.getTask(request, h)
    },
    {
        method:"PUT",
        path:"/task/{id}",
        handler:(request, h) => taskHandler.putTask(request, h)
    },
    {
        method:"DELETE",
        path:"/task/{id}",
        handler:(request, h) => taskHandler.deleteTask(request, h)
    }
]