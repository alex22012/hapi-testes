const ProjectModel = require("../database/models/ProjectModel")
const createObjectId = require("../service/createObjectId")

module.exports = {
    async getProjects(request, h){
        try {
            const resp = await ProjectModel.find({}).exec()
            return h.response(resp).code(200)
        } catch (error) {
            return h.response("Erro").code(500)
        }
    },
    async postProject(request, h){
        try {
            const resp = await ProjectModel.create(request.payload)
            return h.response(resp).code(201)
        } catch (error) {
            console.log(error)
            return h.response("error").code(500)
        }
    },
    async getProject(request, h){
        try {
            let {id} = request.params
            let objId = createObjectId(id)
            if(objId === null)
                return h.response("Id invalido").code(400)
            const resp = await ProjectModel.findById(id).exec()
            return h.response(resp).code(200)
        } catch (error) {
            return h.response("error").code(500)
        }   
    },
    async putProject(request, h){
        try {
            let {id} = request.params
            let objId = createObjectId(id)
            if(objId === null)
                return h.response("Id invalido").code(400)
            await ProjectModel.findByIdAndUpdate(objId, request.payload).exec()
            return h.response("Atualizado com sucesso").code(200)
        } catch (error) {
            return h.response("error").code(500)
        }   
    },
    async deleteProject(request, h){
        try {
            let {id} = request.params
            let objId = createObjectId(id)
            if(objId === null)
                return h.response("Id invalido").code(400)
            await ProjectModel.findByIdAndDelete(objId).exec()
            return h.response("Removido com sucesso").code(200)
        } catch (error) {
            return h.response("error").code(500)
        }   
    },
}