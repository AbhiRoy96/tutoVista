const server = require('../server.js')
const data = require('../data/data.json')
const request = require('request')
const expect = require('chai').expect

describe('server responses', function () {
  it('GET on / should return Hello World!', function (done) {
    request.get(`http://localhost:${server.port}`, function (err, res, body){
      expect(res.statusCode).to.equal(200)
      expect(res.body).to.equal('Hello World!')
      done()
    })
  })
  it('GET on /lower/:WORD should return word', function (done) {
    request.get(`http://localhost:${server.port}/lower/HELLO`, function (err, res, body){
      expect(res.statusCode).to.equal(200)
      expect(res.body).to.equal('hello')
      done()
    })
  })
  it('GET on /data should return contents in data.json', function (done) {
    request.get(`http://localhost:${server.port}/data`, function (err, res, body){
      expect(res.statusCode).to.equal(200)
      expect(res.body).to.equal(JSON.stringify(data))
      done()
    })
  })
})