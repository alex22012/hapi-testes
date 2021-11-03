const projectHandler = require("../handlers/projectHandler")

module.exports = [
    { 
        method:'GET',
        path:"/projects",
        handler:(request, h) => projectHandler.getProjects(request, h)
    },
    {
        method:"POST",
        path:"/project",
        handler:(request, h) => projectHandler.postProject(request, h)
    },
    {
        method:'GET',
        path:'/project/{id}',
        handler:(request, h) => projectHandler.getProject(request, h)
    },
    {
        method:'PUT',
        path:"/project/{id}",
        handler:(request, h) => projectHandler.putProject(request, h)
    },
    {
        method:"DELETE",
        path:"/project/{id}",
        handler:(request, h) => projectHandler.deleteProject(request, h)
    }
]