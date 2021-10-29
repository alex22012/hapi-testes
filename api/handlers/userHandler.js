const UserModel = require('../database/models/UserModel')
const createObjectId = require("../service/createObjectId")

//Exportando os handlers
module.exports = {
    async getUsers(request, h) {
        try {
            const resp = await UserModel.find({}).exec()
            return h.response(resp).code(200)
        } catch (error) {
            return h.response(error).code(500)
        }
    },
    async postUser(request, h) {
        try {
            const resp = await UserModel.create(request.payload)
            return h.response(resp).code(201)
        } catch (error) {
            return h.response(error).code(500)
        }
    },
    async getUser(request, h) {
        try {
            let {id} = request.params
            let objId = createObjectId(id)
            if(objId === null)
                return h.response("Id inválido").code(400)
            const resp = await UserModel.findById(objId).exec()
            return h.response(resp).code(200)
        } catch (error) {
            return h.response(error).code(500)
        }
    }, 
    async putUser(request, h) {
        try {
            let {id} = request.params
            let objId = createObjectId(id)
            if(objId === null)
                return h.response("Id inválido").code(400)
            const resp = await UserModel.findByIdAndUpdate(objId, request.payload).exec()
            return h.response("Atualizado com sucesso").code(200)
        } catch (error) {
            return h.response(error).code(500)
        }
    },
    async deleteUser(request, h) {
        try {
            let {id} = request.params
            let objId = createObjectId(id)
            if(objId === null)
                return h.response("Id inválido").code(400)
            const resp = await UserModel.findByIdAndDelete(objId).exec()
            return h.response("Removido com sucesso").code(200)
        } catch (error) {
            return h.response(error).code(500)
        }
    }
}