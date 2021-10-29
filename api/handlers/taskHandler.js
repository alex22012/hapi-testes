const TaskModel = require("../database/models/TaskModel")
const createObjectId = require("../service/createObjectId")

module.exports = {
    async getTasks(request, h){
        try {
            const resp = await TaskModel.find({}).exec()
            return h.response(resp).code(200)
        } catch (error) {
            console.log(error)
        }
    },
    async postTask(request, h){
        try {
            const resp = await TaskModel.create(request.payload)
            return h.response(resp).code(201)
        } catch (error) {
            return h.response(error).code(500)
        }
    },
    async getTask(request, h){
        try {
            let {id} = request.params
            let objId = createObjectId(id)
            if(objId === null) 
                return h.response('Id invalido').code(400)
            const resp = await TaskModel.findById(objId).exec()
            return h.response(resp).code(200)
        } catch (error) {
            return h.response(error).code(500)
        }
    },
    async putTask(request, h){
        try {
            let {id} = request.params
            let objId = createObjectId(id)
            if(objId === null) 
                return h.response('Id invalido').code(400)
            await TaskModel.findByIdAndUpdate(id, request.payload).exec()
            return h.response("Atualizado com sucesso").code(200)
        } catch (error) {
            return h.reponse(error).code(500)
        }
    },
    async deleteTask(request, h){
        try {
            let {id} = request.params
            let objId = createObjectId(id)
            if(objId === null) 
                return h.response('Id invalido').code(400)
            await TaskModel.findByIdAndDelete(objId)
            return h.response('Removido com sucesso').code(200)
        } catch (error) {
            return h.reponse(error).code(500)
        }
    },
}