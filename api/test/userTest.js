let should = require("should");
let request = require("request");
let chai = require("chai");
let expect = chai.expect;

describe("User", function(){
    let id
    let idAtualiza
    it("salvar usuario", function(done) {
        let user = {name:"Alex", email:"alex@gmail.com", password:"12345"}
        request.post({
            url:"http://localhost:3000/user",
            body: JSON.stringify(user)
        },function(err, res, body){
            expect(res.statusCode).to.equal(201)
            done()
        })
    }).timeout(10000)
    it("Pegar usuarios", function(done){
       request.get({
        url:"http://localhost:3000/users"
       },function(err, res, body){
           let _body = {}
           try{
               _body = JSON.parse(body)
           }catch(error){
               _body = {}
           }
           id = _body[0]._id
           expect(res.statusCode).to.equal(200)
           expect(_body).to.have.length.at.least(0)
           done()
       })
    }).timeout(10000)
    it("atualizar usuario", function(done){
        let newUser = {name:"Pedro", email:"pedroca@gmail.com", senha:"123456"}
        request.put({
            url:`http://localhost:3000/user/${id}`,
            body: JSON.stringify(newUser)
        }, function(err, res, body){
            expect(res.statusCode).to.equal(200)
            done()
        })
    }).timeout(10000)
    it("Pegar um usuario", function(done){
        request.get({
            url:`http://localhost:3000/user/${id}`
        }, function(err, res, body){
            expect(res.statusCode).to.equal(200)
            let _body = {}
            try {
                _body = JSON.parse(body)
            }catch(error){
                console.log(error)
                _body = {}
            }
            expect(_body).to.have.property("name")
            done()
        })
    }).timeout(10000)
    it("deletar usuario", function(done) {
        request.delete({
            url:`http://localhost:3000/user/${id}`
        }, function(err, res, body){
            expect(res.statusCode).to.equal(200)
            done()
        })
    }).timeout(10000)
    
    
})