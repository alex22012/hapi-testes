const request = require("request")
const should = require("should")
const chai = require("chai")
const expect = chai.expect

describe("Project", () => {
    let id
    it("Inserir um projeto", done => {
        let project = {title:"Projeto",
            team:1,
            startDate:new Date(),
            endDate:new Date()
        }
        request.post({
            url:`http://localhost:3000/project`,
            body:JSON.stringify(project)
        }, (err, res, body) => {
            expect(res.statusCode).to.equal(201)
            done()
        })
    }).timeout(10000)
    it("Pegar todos os projetos", done => {
        request.get({
            url:"http://localhost:3000/projects"
        }, (err, res, body) => {
            let _body = JSON.parse(body)
            expect(res.statusCode).to.equal(200)
            expect(_body).to.have.length.at.least(1)
            id = _body[0]._id
            done()
        })
    }).timeout(10000)
    it("Atualizar um projeto", done => {
        let newProject = {title:"Projeto novo",
            team:1,
            startDate:new Date(),
            endDate:new Date()
        }
        request.put({
            url:`http://localhost:3000/project/${id}`,
            body:JSON.stringify(newProject)
        }, (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            done()
        })
    }).timeout(10000)
    it("Pegar um projeto", done => {
        request.get({
            url:`http://localhost:3000/project/${id}`
        }, (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            let _body = JSON.parse(body)
            expect(_body).to.have.property("title")
            done()
        })
    }).timeout(10000)
    it("Remover um projeto", done => {
        request.delete({
            url:`http://localhost:3000/project/${id}`
        }, (err, res, body) => {
            expect(res.statusCode).to.equal(200)
            done()
        })
    }).timeout(10000)
})