const userHandler = require("../handlers/userHandler")
//Exportando o array de rotas do usuario
module.exports = [
    {
        method:"GET",
        path:"/users",
        handler:(request, h) => userHandler.getUsers(request, h)
    },
    {
        method:"POST",
        path:"/user",
        handler:(request, h) => userHandler.postUser(request, h)
    },
    {
        method:"GET",
        path:"/user/{id}",
        handler:(request, h) => userHandler.getUser(request, h)
    },
    {
        method:"PUT",
        path:"/user/{id}",
        handler:(request, h) => userHandler.putUser(request, h)
    },
    {
        method:"DELETE",
        path:"/user/{id}",
        handler:(request, h) => userHandler.deleteUser(request, h)
    }
]