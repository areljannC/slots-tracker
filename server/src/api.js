const express = require('express')
const cors = require('cors')

const api = express()

api.use(cors({ origin: true }))

api.get('/', (req, res) => {
  res.status(200).json({
    test: 'test'
  })
})

module.exports = api