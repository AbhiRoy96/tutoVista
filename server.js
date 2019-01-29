const express = require('express')
const app = express()
const data = require('./data/data.json')

app.port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/lower/:word', (req, res) => {
  res.send(req.params.word.toLowerCase())
})

app.get('/data', (req, res) => {
    res.send(JSON.stringify(data))
})

app.listen(app.port, () => {
  console.log(`Server listening on port ${app.port}!`)
})

module.exports = app; // for testing