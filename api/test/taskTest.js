const should = require("should")
const request = require("request")
const chai = require("chai")
const expect = chai.expect

describe("Task", function() {
    let _id
    it("Nova task", function(done){
        let task = {title:"Task", complexity:1, dificulty:5, startDate:new Date(), endDate:new Date()}
        request.post({
            url:`http://localhost:3000/task`,
            body:JSON.stringify(task)
        }, function(err, res, body){
            expect(res.statusCode).to.equal(201)
            done()
        })
    }).timeout(10000)
    it("Pegar Tasks", function(done) {
        request.get({
            url:"http://localhost:3000/tasks"
        }, function(err, res, body){
            let _body = {}
            try {
                _body = JSON.parse(body)
            }catch(err) {
                _body = {}
            }
            _id = _body[0]._id
            expect(res.statusCode).to.equals(200)
            expect(_body).to.have.length.at.least(1)
            done()
        })
    }).timeout(10000)
    it("Atualizar task", function(done){
        let newTask = {title:"nova task", complexity:3, dificulty:1, startDate:new Date(), endDate:new Date()}
        request.put({
            url:`http://localhost:3000/task/${_id}`,
            body:JSON.stringify(newTask)
        }, function(err, res, body){
            expect(res.statusCode).to.equal(200)
            done()
        })
    }).timeout(10000)
    it("Pegar task", function(done) {
        request.get({
            url:`http://localhost:3000/task/${_id}`
        }, function(err, res, body){
            let _body = {}
            try {
                _body = JSON.parse(body)
            }catch(err) {
                _body = {}
            }
            expect(res.statusCode).to.equal(200)
            expect(_body).to.have.property("title")
            done()
        })
    }).timeout(10000)
    it("Deletar task", function(done) {
        request.delete({
            url:`http://localhost:3000/task/${_id}`
        }, function(err, res, body){
            expect(res.statusCode).to.equal(200)
            done()
        })
    }).timeout(10000)
})